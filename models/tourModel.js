const mongoose = require('mongoose');
const slugify = require('slugify');

const TourSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'A tour Name must be unique'],
        required: true,
        trim: true,

        //==== Validators for Strings only
        minlength: [10, 'A Tour name must have at least 10 characters'],
        maxlength: [40, 'A Tour name should have 40 characters or less']
    },
    slug: String,
    duration: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'A tour must have a max group size']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have a difficulty'],

        //Validators for multiple options => Only for Strings
        enum: {
            values: ['easy', 'medium', 'difficult'],
            message: 'Difficulty is either: easy, medium, or difficult'
        }
    },
    ratingsAverage: {
        type: Number,
        default: 4.5,

        //==== Validators only for Numbers and Dates
        min: [1, 'A Tour rating should be 1.0 or more'],
        max: [5, 'A Tour rating should be 5.0 or less'],
        set: val => Math.round(val * 10) / 10
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'A tour Must have a price']
    },

    priceDiscount: {
        type: Number,

        //===Custom Validators
        validate: {
            validator: function(val) {

                //==== the 'this' in this validator works only when creating new docs. not when updatings
                if (val >= this.price) {
                  // eslint-disable-next-line prettier/prettier
                  throw new Error('The discount cannot be larger or equal to the tour price.');
                } else if (val < 0) {
                  throw new Error('The discount cannot be less than 0.');
                } else {
                  return true;
                }
              },
              message: 'The discount Price ({ VALUE}) should be less than the Price'
        }
    },

    secretTour: {
        type: Boolean,
        default: false,
    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true,
        required: [true, 'A tour Must have a description']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        required: [true, 'A tour Must have an image cover']
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date],
    startLocation: {
        //GeoJson
        type: {
            type: String,
            default: 'Point',
            enum: ['Point']
        },
        coordinates: [Number],
        address: String,
        description: String
    },

    //===== Embedding a Document => Always start with an array of objects
    locations: [
        {
            type: {
                type: String,
                default: 'Point',
                enum: ['Point']
            },
            coordinates: [Number],
            address: String,
            description: String,
            day: Number
        }
    ],

    /*==== Embedding Documents of Users as guides here 
    //=== Is not the best option as our case now since the guides might change their roles as lead-guides to guides or even might change their email address
    //=== That needs also to be reflected in the tours too which is a lot of work
    //guides: Array
    */

    /* ====> Referecing Document 
    */

    //===== Parent Refencing btw Tour and User models
   guides: [
       {
           type: mongoose.Schema.ObjectId,
           ref: 'User' //== We dont need the User model to be Imported unlike Embedding 
       }
   ]
}, 
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

//=== Add indexes for Easy access to reduce the number of docs to be examine 
TourSchema.index({ price: 1 }); //===> This is called Single field Index
TourSchema.index({ slug: 1 }); //===> Sometimes the slugs might be the most frequently query term
TourSchema.index({ price: 1, ratingsAverage: -1 }); //===> This is called compound Index
TourSchema.index({ startLocation: '2dsphere' });  //==GeoSpeical index for finding how far from a given location

TourSchema.virtual('durationWeeks').get(function(){
    return this.duration/7;
});

//===== Virtual Populate to get the Reviews from the Review (Child referencing)
TourSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'tour', //===The name in the Child Model
    localField: '_id' //==== The name in this Model (parent)
});

//==== Using pre-save middleware to populate the guides array from the User's model
//==== and embed it into the guides array in the Schema 
//==> this is not a better option for our case and we will use for referencing instead
// TourSchema.pre('save', async function(next){
//     const guidePromise = this.guides.map(async id => await User.findById(id));
//     this.guides = await Promise.all(guidePromise);
//     next();
// });

//===== DOCUMENT MIDDLEWARE that run only on .save() and .create(). This points the document
TourSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true });
    next();
})


//===== QUERY MIDDLEWARE
TourSchema.pre(/^find/, function(next){
    this.find({secretTour: {$ne: true }});
    next();
});

TourSchema.pre(/^find/, function(next){
    this.populate({
            path: 'guides',
            select: '-__v -passwordChangedAt'
        });

        next();
})

//===== AGGREGATE MIDDLEWARE
// TourSchema.pre('aggregate', function(next){
//     this.pipeline().unshift({ $match: { secretTour: { $ne: true }}});
//     next();
// })

const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;