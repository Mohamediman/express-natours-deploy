const fs = require('fs')
const dotenv  = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path: './config.env' })

const Tour = require('./../../models/TourModel');
const User = require('./../../models/userModel');
const Review = require('./../../models/reviewModel');



const DB = process.env.DATABASE_2.replace('<PASSWORD>', process.env.DB_PASSWORD_2);

const connectDB = async() => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("Database connected ...");

    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

connectDB();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));

//==== import the data into the DB
const importData = async()=> {
    try {
        await Tour.create(tours)
        await User.create(users, { validateBeforeSave: false })
        await Review.create(reviews)
        console.log('Documents successfully Created....');

        process.exit();
    } catch (err) {
        console.log(err)
    }

}

//===Delete Tours from the DB
const deleteData = async()=> {
    try {
        await Tour.deleteMany();
        await Review.deleteMany();
        await User.deleteMany();
        console.log('Data Deleted Successfully from the DB...');

        process.exit();
    } catch (err) {
        console.log(err);
    }
}
console.log(process.argv);
if(process.argv[2] === '--import'){
    importData();
} else if(process.argv[2] === '--delete'){
    deleteData();
};

console.log(process.argv[2])
