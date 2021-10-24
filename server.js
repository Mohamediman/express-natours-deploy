const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

//=== Handle any unCaught Rejection from anywhere in the application for example using undeclired variable
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION: SHUTTING DOWN THE SERVER');
  console.log(err.name, err.message);
  // server.close(() => process.exit(1));
});

const DB = process.env.DATABASE_2.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD_2
);

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('Database connected ...');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

connectDB();

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  console.log(`the App is running on port ${port}`)
);

// const server = app.listen(
//   process.env.PORT || process.env.CONFIG_SYSTEM_PORT,
//   () => {
//     console.log(
//       `app running on port: ${
//         process.env.PORT || process.env.CONFIG_SYSTEM_PORT
//       }`
//     );
//   }
// );

//=== Handle any unhandled Rejection from anywhere in the application for example failure to Connect to DB
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION: SHUTTING DOWN THE SERVER..');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
