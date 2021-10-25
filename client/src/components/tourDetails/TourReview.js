import React from 'react'
import PropTypes from 'prop-types'

import { IoIosStarOutline } from "react-icons/io";

const TourReview = ({ review }) =>   
<div className="reviews__card">
  <div className="reviews__avatar">
    <img
      src={`/img/users/${review.user.photo}`}
      alt={review.user.name}
      className="reviews__avatar-img"
    />
    <h6 className="reviews__user">{review.user.name}</h6>
  </div>
  <p className="reviews__text">{review.review}</p>

  <div className="reviews__rating">

      <IoIosStarOutline className={`reviews__star ${review.rating >= 1 && `reviews__star--active`} `}/>
      <IoIosStarOutline className={`reviews__star ${review.rating >= 2 && `reviews__star--active`} `}/>
      <IoIosStarOutline className={`reviews__star ${review.rating >= 3 && `reviews__star--active`} `}/>
      <IoIosStarOutline className={`reviews__star ${review.rating >= 4 && `reviews__star--active`} `}/>
      <IoIosStarOutline className={`reviews__star ${review.rating >= 5 && `reviews__star--active`} `}/>
  </div>
</div>

TourReview.propTypes = {
    review: PropTypes.object
}

export default TourReview
