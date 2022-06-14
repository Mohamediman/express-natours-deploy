import React, { Fragment, useState, useMemo } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

const TourMap = ({ tour }) => {
  const [viewport, setViewport] = useState({
    latitude: tour.locations[0].coordinates[1],
    longitude: tour.locations[0].coordinates[0],
    zoom: 5,
    maxZoom: 5,
  });

  const markers = useMemo(
    () =>
      tour.locations.map((loc) => (
        <Marker
          key={`${loc.coordinates[1]}${loc.coordinates[0]}}`}
          longitude={Number(loc.coordinates[0])}
          latitude={Number(loc.coordinates[1])}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div className="marker"></div>
        </Marker>
      )),
    [tour.locations]
  );

  if (markers) {
    return (
      <ReactMapGL
        mapStyle={'mapbox://styles/mohamedai/ckskl74tv0ell17rk4x53odnj'}
        mapboxApiAccessToken={
          'pk.eyJ1IjoibW9oYW1lZGFpIiwiYSI6ImNrc2tqNHFqYTJvN2wybm9hdnJreTdvaTMifQ.WLNcgVIG5MDN9gxqQ88a8A'
        }
        {...viewport}
        width="100%"
        height="100%"
        scrollZoom={false}
        onViewportChange={setViewport}
      >
        {markers}
      </ReactMapGL>
    );
  } else {
    return (
      <Fragment>
        <h1>No Tour found</h1>
      </Fragment>
    );
  }
};

TourMap.propTypes = {
  tour: PropTypes.object,
};

export default TourMap;
