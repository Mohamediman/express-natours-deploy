import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import TourGuide from './TourGuide'
import { IoIosCalendar, IoIosStarOutline, IoIosTrendingUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const TourFactsAndGuides = ({ tour }) => {
    return (
        <div className="overview-box">
        <div>
         <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
            <IoIosCalendar className="overview-box__icon" />
            <span className="overview-box__label">Next date</span>
            <span className="overview-box__text"><Moment format="MMM YYYY">{tour.startDates[0]}</Moment></span>
            </div>
            <div className="overview-box__detail">
            <IoIosTrendingUp className="overview-box__icon"/>
            <span className="overview-box__label">Difficulty</span>
            <span className="overview-box__text">{tour.difficulty}</span>
            </div>
            <div className="overview-box__detail">
            <FaRegUser className="overview-box__icon"/>
            <span className="overview-box__label">Participants</span>
            <span className="overview-box__text">{tour.maxGroupSize} people</span>
            </div>
            <div className="overview-box__detail">
            <IoIosStarOutline className="overview-box__icon" />
            <span className="overview-box__label">Rating</span>
            <span className="overview-box__text">{tour.ratingsAverage} / 5</span>
            </div>
        </div>

        <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
             {tour.guides.map(guide => <TourGuide key={guide._id} guide={guide} /> )}
         </div>
        </div>
    </div>
    )
}

TourFactsAndGuides.propTypes = {
    tour: PropTypes.object
}

export default TourFactsAndGuides
