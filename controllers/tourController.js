const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const factory = require('./handlerfactory');
const { restrictTo } = require('./authController');


exports.aliasTopTours = async (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty'

    next();
};



exports.getAllTours = factory.getAll(Tour);
exports.createTour = factory.createOne(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });



//===Get tour by Slug
exports.getTourBySlug = catchAsync(async(req, res, next) => {
    const slug = req.params.slug;
    const tour = await Tour.findOne({ slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
      });
    
    if(!tour) return new AppError("No tour with that slug", 404);

    res.status(200).json({
        status: 'success',
        tour
    })
});

exports.getTourStats = catchAsync(async(req, res, next) => {
        const stats = await Tour.aggregate([
            {
                $match: { ratingsAverage: { $gte: 4.5 }}
            },
            {
                $group: {
                    _id: {$toUpper: '$difficulty' },
                    numTours: {$sum: 1 },
                    numRatings: { $sum: '$ratingsQuantity' },
                    avgRating: { $avg: '$ratingsAverage' },
                    avgPrice: { $avg: '$price' },
                    maxPrice: { $max: '$price' },
                    minPrice: { $min: '$price' }
                }
             },
             {
                 $sort: {avgPrice: 1 }
             }
        ]);

        res.status(200).json({ 
            status: 'success',
            data: {
                stats
            }
        })
  });

//====Aggregration => Solve real problem by finding out the busiest Month of the year for the tours
exports.monthlyPlan = catchAsync(async(req, res, next) => {
        const year = req.params.year * 1;
        const plan = await Tour.aggregate([
            {
                $unwind: '$startDates'
            },
            {
                $match: {
                    startDates: {
                        $gte: new Date(`${year}-01-01`),
                        $lte: new Date(`${year}-12-31`)
                    }
                }
            },
            {
                $group: {
                    _id: { $month: '$startDates'},
                    numTourStart: {$sum: 1 },
                    tours: { $push: '$name'}
                }
            },

            {
                $sort: { numTourStart: -1 }
            },

        ]);

        res.status(200).json({ 
            status: 'success',
            data: {
                plan
            }

        })
});

// => /tours-within/233/center/40,-79/unit/km
exports.getToursWithin = catchAsync(async(req, res, next) => {
    const { distance, latlng, unit } = req.params;
    const [ lat, lng ] = latlng.split(',');
    const radius = unit === 'mi' ? distance /3962.3 : distance / 6378.1 ;
    if(!lat || !lng){
        return next(new AppError('Please provide latitude and Longitude in the format lat,lng.', 400));
    }
    const tours = await Tour.find({ 
        startLocation: { $geoWithin : { $centerSphere: [[lng, lat], radius ]}}  
    });
    res.status(200).json({
        status: 'success',
        result: tours.length,
        datat: {
            data: tours
        }
    })
});


exports.getDistances= catchAsync(async(req, res, next) => {
    const { distance, latlng, unit } = req.params;
    const [ lat, lng ] = latlng.split(',');

    const multiplier = unit === 'mi' ? 0.000621371 : 0.001

    if(!lat || !lng){
        return next(new AppError('Please provide latitude and Longitude in the format lat,lng.', 400));
    }
    //GeoSpacial, there is one that is always required, $'geoNear'
    // MUST be the first one fied and it requires one of the field that has index,
     //in our case, since we only have one field with geospacial index, startLocation, it will automatically use that
     // this is optional, this is created in model and its where the 
      // calculated distance will be store. in out case, it will be called distances

    const distances = await Tour.aggregate([
        { 
        $geoNear : {   
              near: {     
               type: 'Point',
               coordinates: [lng * 1, lat * 1]
            },
            distanceField: 'distance',
            distanceMultiplier: multiplier  // Convert the distance into KM or mile (Always comes in M) 
        }
      },
      {
        $project: {
            distance: 1,
            name: 1
        }
      }
   ]);

    res.status(200).json({
        status: 'success',
        data: {
            data: distances
        }
    })
})