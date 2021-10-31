import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TourHeader from './TourHeader';
import TourDescription from './TourDescription';
import TourFactsAndGuides from './TourFactsAndGuides';
import TourReview from './TourReview';
import TourSectionPictures from './TourSectionPictures';
import TourMap from './TourMap';
import Spinner from '../spinner/Spinner';
import TourDetailCTA from './TourDetailCTA';

import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { bookTour, getTour } from '../../redux/tours/tours.action';
import { selectAuthUser } from '../../redux/auth/auth.selectors';
import { SelectATour } from '../../redux/tours/tours.selectors';

const TourDetails = ({ match, getTour }) => {
  const structuredSelector = createStructuredSelector({
    tour: SelectATour,
    user: selectAuthUser,
  });

  const { tour, user } = useSelector(structuredSelector);

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
          <div id="map"> </div>
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

      <TourDetailCTA tour={tour} user={user} bookTour={bookTour} />
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
