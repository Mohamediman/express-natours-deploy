const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHanlder = require('./controllers/errorControler');

const ToursRoutes = require('./routes/tours');
const UsersRoutes = require('./routes/users');
const ReviewRoutes = require('./routes/reviews');
const BookingRoutes = require('./routes/bookingRoutes');
const ViewRoutes = require('./routes/viewRoutes');

const app = express();
app.use(cors());
app.use(compression());

//=== for heroku https
app.enable('trust proxy');

//=== Middlewares
//===> Set the secure HTTP headers
app.use(helmet());
//===> Bodyperser ==> Reading the data from the body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

//===== DATA Sanitization against NOSQL Injection
app.use(mongoSanitize());

//===== DATA Sanitization against xss
app.use(xss());

//===== Prevent against parameter Population
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

//===> For debuging
app.use(morgan('dev'));

//===> Limiting rates from specific IP address
const Limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try in an hour',
});

app.use('/api', Limiter);

//-===== Test
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log('..........................................');
  console.log('cookies From app.js::', req.cookies.jwt);
  console.log('..........................................');

  next();
});

//===Routes
app.use('/api/v1/tours', ToursRoutes);
app.use('/api/v1/tour', ViewRoutes);
app.use('/api/v1/users', UsersRoutes);
app.use('/api/v1/reviews', ReviewRoutes);
app.use('/api/v1/bookings', BookingRoutes);

//===Set static files in production
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

//==== Serve all the html routes
// Serving static files
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// );

//=== handle all unhandle route error
app.all('*', (req, res, next) => {
  //=== if anything is passed into the next func, it will assume its error and skips all the other middlewares and goes directly to the global error handling middleware
  next(new AppError(`Can't find ${req.originalUrl} on this Server.`, 404));
});

//====Global Error Handling Middleware
app.use(globalErrorHanlder);

module.exports = app;
