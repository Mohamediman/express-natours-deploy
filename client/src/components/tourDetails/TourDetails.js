import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourFactsAndGuides from './TourFactsAndGuides';
import TourReview from './TourReview';
import TourSectionPictures from './TourSectionPictures';
import TourMap from './TourMap';
// import TourGuide from './TourGuide'
import LogoWhite from '../../img/logo-white.png';

import { connect } from 'react-redux';
import { bookTour, getTour } from '../../actions/tours';

const TourDetails = ({
  match,
  tours: { tour, loading },
  user,
  bookTour,
  getTour,
}) => {
  // console.log("Cookie from Details page:", Cookies.get('jwt'))
  useEffect(() => {
    getTour(match.params.slug);
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {tour && !loading && <TourHeader tour={tour} />}

      <section className="section-description">
        {tour && !loading && <TourFactsAndGuides tour={tour} />}
        {tour && <TourDescription tour={tour} />}
      </section>
      <section className="section-pictures">
        {tour &&
          !loading &&
          tour.images.length > 0 &&
          tour.images.map((image) => {
            let uniqueKey = uuidv4();
            return <TourSectionPictures key={uniqueKey} image={image} />;
          })}
      </section>

      {tour && (
        <section className="section-map">
          <div id="map"></div>
          <TourMap tour={tour} />
        </section>
      )}

      <section className="section-reviews">
        <div className="reviews">
          {tour &&
            !loading &&
            tour.reviews.length > 0 &&
            tour.reviews.map((review) => (
              <TourReview key={review._id} review={review} />
            ))}
        </div>
      </section>

      <section className="section-cta">
        {tour && !loading && (
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src={LogoWhite} alt="Natours logo" />
            </div>
            <img
              src="/img/tours/tour-5-2.jpg"
              alt="natours"
              className="cta__img cta__img--1"
            />
            <img
              src="/img/tours/tour-5-1.jpg"
              alt="natours images"
              className="cta__img cta__img--2"
            />

            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                {tour && tour.duration} days. 1 adventure. Infinite memories.
                Make it yours today!
              </p>
              {user ? (
                <button
                  className="btn btn--green span-all-rows"
                  onClick={(e) => bookTour(tour.id)}
                >
                  Book tour now!
                </button>
              ) : (
                <a href="/login" className="btn btn--green span-all-rows">
                  Login to Book tour
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </Fragment>
  );
};

TourDetails.propTypes = {
  tour: PropTypes.object,
  loading: PropTypes.bool,
  bookTour: PropTypes.func,
  isLoggedIn: PropTypes.func,
};

const mapStateToProps = (state) => ({
  tours: state.tours,
  user: state.auth.user,
});

export default connect(mapStateToProps, { bookTour, getTour })(TourDetails);