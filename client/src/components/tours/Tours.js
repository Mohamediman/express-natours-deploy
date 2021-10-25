import React, {useEffect } from 'react'
import PropTypes from 'prop-types'
import Tour from './Tour';

import { connect } from 'react-redux'

const Tours = ({ tours }) => {
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

Tours.propTypes = {
    tours: PropTypes.array
}
const mapStateToProps = state => ({
    tours: state.tours.tours
})

export default connect(mapStateToProps)(Tours)
