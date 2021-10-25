import React,{ useEffect } from 'react'
import Tour from '../tours/Tour'


import { connect } from 'react-redux'
import { getAllBooking } from '../../actions/bookings'

const MyBookings = ({ getAllBooking, tours }) => {
    useEffect(() => {
        getAllBooking();
        //eslint-disabled-next-line
    }, [])
    return (
        <main className="main">
        <div className="card-container">
                { tours && tours.length > 0 &&
                tours.map(tour => <Tour key={tour._id} tour={tour} />)
             }
      </div>
  </main>
    )
}
const mapStateToProps = state => ({
    tours: state.bookings.toursBooked
})

export default connect(mapStateToProps, { getAllBooking })(MyBookings)
