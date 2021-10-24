const mongoose = require('mongoose');
// const Tour = require('./tourModel');


const reviewSchema = new mongoose.Schema({
    review:  {
        type: String,
        required: [true, 'Review Cannot be empty']
    },
    rating: {
        type: Number,
        min: [0, 'A review rating must be in between 0 and 5.0'],
        max: [5.0, 'A review rating must be in between 0 and 5.0']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

    //==== Referencing to the Tour => Parent Referencing
    tour: {
            type: mongoose.Schema.ObjectId,
            ref: 'Tour',
            required: [true, 'A Review must be belong to a tour']
        },

    //===== Refencing to the user => Parent Referencing
    user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: [true, 'A Review must be belong to a user']
    }
 },
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

//=== Create a unique tour and user ids so that a user can only post a review for a specific tour only at once 
reviewSchema.index({ tour: 1, user: 1 }, { unique: true }); // this means the combination of the tour and user should be unique hence NO duplicate reviews

//===Pre-hook to populate the reviews and the user who posted them
reviewSchema.pre(/^find/, function(next){
    this.populate({
        path: 'user',
        select: 'name photo'
    });
    
    next();
});


//===== Static Method for Calculating the average and number of ratings
reviewSchema.statics.calcAverageRatings = async function(tourId){
    //=== Do the calcuation using the aggregate method
    const stats = await this.aggregate([    // this points the Model and not the current docs
        {
            $match: { tour: tourId }
        },
        { 
            $group: {
            _id: '$tour',
            nRatings: { $sum: 1 },
            avgRating: { $avg: '$rating'}
        }
      }

    ]);
    //===Update the Tour
    if(stats.length > 0){
        await Tour.findByIdAndUpdate(tourId, {
            ratingsQuantity: stats[0].nRatings,
            ratingsAverage: stats[0].avgRating
        })
    } else {
        await Tour.findByIdAndUpdate(tourId, {
            ratingsQuantity: 0,
            ratingsAverage: 4.5
        })
    }

}


//=== Post Hook Middleware to update the ratings whenever there is changes
reviewSchema.post('save', function(){
    //==== this.constructor points to the current model otherwise we would have access to the current schema model
    this.constructor.calcAverageRatings(this.tour);
});

//==== Editing and deleting a review, need to update the average and number of ratings
//==Queries => findByIdAndUpdate & findByIdAndDelete 

// We need to call the calcAverageRatings Statics method to update the changes 
// and we will need to use query middleware. But Using query middleware, we will not
// have access to the document, we have to go around, save the document from the query in pre-hook
// and pass it to post middleware and call the calcAverageRatings method to update the changes

reviewSchema.pre(/^findByIdAnd/, async function(next){
    const r = await this.findOne(); // === To get the doc from the query. "this" in the query points to the current query
            // now r is the current document we got the query
    next();

    // we can't call calcAverageRatings here since the data is not upto date in pre-save middleware
});

// Now use post query middleware to call calcAverageRatings method in order to update the changes
reviewSchema.post(/^findByIdAnd/, async function(){
    // this.r => points the current document
    // this.r.construtor => points the Model that we need to call the statics method on
    await this.r.constructor.calcAverageRatings(this.r.tour); // this.r.tour => points the current tour id on the doc
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

