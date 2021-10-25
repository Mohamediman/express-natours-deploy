import React, { Fragment, useState, useMemo } from 'react'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types'

const TourMap = ({ tour }) => {
  let lgCn, ltCn;
  if(tour){
    lgCn =  Number(tour.locations[0].coordinates[0]);
    ltCn =  Number(tour.locations[0].coordinates[1]);
  }

  const [viewport, setViewport] = useState({
    latitude: 34.011646,
    longitude: -116.107963,
    zoom: 5
  });

      { 
        if(tour && tour.locations){
          return(
            <ReactMapGL
            mapStyle={'mapbox://styles/mohamedai/ckskl74tv0ell17rk4x53odnj'}
            mapboxApiAccessToken = {
              'pk.eyJ1IjoibW9oYW1lZGFpIiwiYSI6ImNrc2tqNHFqYTJvN2wybm9hdnJreTdvaTMifQ.WLNcgVIG5MDN9gxqQ88a8A'
            }
            {...viewport}
            width="100%"
            height="100%"
            scrollZoom={false}
            onViewportChange={(viewport) => setViewport(viewport)}>
           
              {
                tour.locations.map(loc => {
                  let lng = Number(loc.coordinates[0])
                  let lt = Number(loc.coordinates[1])

                  // console.log("marker:", lng, lt)
  
                  return (
                  <Marker latitude={lt} longitude={lng} offsetLeft={-20} offsetTop={-10}>
                   <div key={ lng * lt } className="marker"></div>
                 </Marker>
                )})
              }
          </ReactMapGL>
        )
      } else {
        return <Fragment><h1>No Tour found</h1></Fragment>
      }
    
    }
  }

TourMap.propTypes = {
  tour: PropTypes.object
}

export default TourMap;
