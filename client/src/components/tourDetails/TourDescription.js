import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const TourDescription = ({ tour }) => {
    return (
        <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">About {tour.name} </h2>
            <p className="description__text">{tour.description && tour.description.split('.').splice(0, 2)}</p>
            <p className="description__text">{tour.description && tour.description.split('.').splice(2) }</p>
      </div>
    )
}

TourDescription.propTypes = {
    tour: PropTypes.object
}

export default TourDescription
