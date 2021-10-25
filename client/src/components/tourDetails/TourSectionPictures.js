import React from 'react'
import PropTypes from 'prop-types'

const TourSectionPictures = ({ image }) => <div className="picture-box">
        <img
            className="picture-box__img picture-box__img--1"
            src={`/img/tours/${image}`}
            alt={image}
        />
        </div>

TourSectionPictures.propTypes = {
    image: PropTypes.string
}

export default TourSectionPictures
