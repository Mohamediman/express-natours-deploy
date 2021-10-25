import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import { createBooking } from '../../actions/bookings'
import { connect } from 'react-redux'

const BookingSuccess = ({ createBooking, match  }) => {
        useEffect(() => {
            const tourId = match.params.tourId
            const userId = match.params.userId
            const price = match.params.price
            console.log(tourId, userId, price);
            createBooking(tourId, userId, price);
        });

        console.log("window pathname:", window.location.pathname);

    return (
        <div>
            <h1>Booking Success</h1>
        </div>
    )
}

export default connect(null, { createBooking })(BookingSuccess)
