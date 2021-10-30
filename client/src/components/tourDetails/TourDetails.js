import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourFactsAndGuides from './TourFactsAndGuides';
import TourReview from './TourReview';
import TourSectionPictures from './TourSectionPictures';
import TourMap from './TourMap';
import Spinner from '../spinner/spinner';

import LogoWhite from '../../img/logo-white.png';

import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { bookTour, getTour } from '../../redux/tours/tours.action';
import { selectAuthUser } from '../../redux/auth/auth.selectors';
import {
  SelectATour,
  SelectTourLoading,
} from '../../redux/tours/tours.selectors';

const TourDetails = ({ match, bookTour, getTour }) => {
  const structuredSelector = createStructuredSelector({
    tour: SelectATour,
    loading: SelectTourLoading,
    user: selectAuthUser,
  });

  const { tour, loading, user } = useSelector(structuredSelector);

  useEffect(() => {
    getTour(match.params.slug);
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {tour ? <TourHeader tour={tour} /> : <Spinner />}

      <section className="section-description">
        {tour ? <TourFactsAndGuides tour={tour} /> : <Spinner />}
        {tour ? <TourDescription tour={tour} /> : <Spinner />}
      </section>
      <section className="section-pictures">
        {tour && tour.images.length > 0 ? (
          tour.images.map((image) => {
            let uniqueKey = uuidv4();
            return <TourSectionPictures key={uniqueKey} image={image} />;
          })
        ) : (
          <Spinner />
        )}
      </section>

      {tour ? (
        <section className="section-map">
          <div id="map"></div>
          <TourMap tour={tour} />
        </section>
      ) : (
        <Spinner />
      )}

      <section className="section-reviews">
        <div className="reviews">
          {tour && tour.reviews.length > 0 ? (
            tour.reviews.map((review) => (
              <TourReview key={review._id} review={review} />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </section>

      <section className="section-cta">
        {tour ? (
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
        ) : (
          <Spinner />
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

export default connect(null, { bookTour, getTour })(TourDetails);
