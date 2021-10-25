import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

import { ImLocation } from "react-icons/im";
import { FaRegFlag, FaRegUser } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";

import { connect } from 'react-redux'

const Tour = ({ tour }) => {
    // const onClick = id => getTour(id);

    return (
        <div className="card">
            <div className="card__header">
                <div className="card__picture">
                    <div className="card__picture-overlay">&nbsp;</div>
                    <img src={`/img/tours/${tour.imageCover}`} alt={tour.name} className="card__picture-img" />
                 </div>
                    <h3 className="heading-tertirary"><span>{tour.name}</span></h3>
                 </div>
        
                <div className="card__details">
                    <h4 className="card__sub-heading">{tour.difficulty} {tour.duration}-day tour</h4>
                    <p className="card__text">{tour.summary}</p>
                    <div className="card__data">
                        <ImLocation className="card__icon" />
                        <span>{tour.startLocation.description }</span>
                    </div>
                    <div className="card__data">
                        <IoIosCalendar className="card__icon"/>
                        <span> 
                            <Moment format="MMM YYYY">{tour.startDates[0]}</Moment>
                         </span>
                     </div>
                    <div className="card__data">
                        <FaRegFlag className="card__icon" />
                        <span>{tour.locations.length } stops</span>
                    </div>
                    <div className="card__data">
                        <FaRegUser className="card__icon"/>
                        <span>{tour.maxGroupSize} people</span>
                    </div>
                </div>
        

                 <div className="card__footer">
                    <p>
                        <span className="card__footer-value">${tour.price}</span>
                        <span className="card__footer-text">per person</span>
                    </p>
                    <p className="card__ratings">
                        <span className="card__footer-value">{tour.ratingsAverage}</span>
                        <span className="card__footer-text">rating ({tour.ratingsQuantity})</span>
                    </p>
                    <Link to={`/tour/${tour.slug}`} 
                    className="btn btn--green btn--small">Details</Link>
                </div>   
            </div>
    )
}
Tour.propTypes = {
    tour: PropTypes.object
}

export default connect(null)(Tour)
