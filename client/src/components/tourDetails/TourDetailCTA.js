import React from 'react';
import Spinner from '../spinner/Spinner';
import LogoWhite from '../../img/logo-white.png';

const TourDetailCTA = ({ tour, user, bookTour }) => {
  return (
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
              {tour && tour.duration} days. 1 adventure. Infinite memories. Make
              it yours today!
            </p>
            {user ? (
              <button
                className="btn btn--green span-all-rows"
                onClick={() => bookTour(tour.id)}
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
  );
};

export default TourDetailCTA;
