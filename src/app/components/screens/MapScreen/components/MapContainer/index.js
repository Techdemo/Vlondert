import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import mapboxConfig from '../../../../../../config/mapboxConfig';

const MapContainer = () => {
  const Map = ReactMapboxGl({
    accessToken: mapboxConfig.key
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v8"
      center={[4.445014, 51.913833]}
      zoom={[18]}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
    </Map>
  )
}

export default MapContainer