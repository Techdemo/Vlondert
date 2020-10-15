import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import mapboxConfig from '../../../../../../config/mapboxConfig';

const MapContainer = () => {
  const paintLayer = {
    'fill-extrusion-color': '#aaa',
    'fill-extrusion-height': {
      type: 'identity',
      property: 'height'
    },
    'fill-extrusion-base': {
      type: 'identity',
      property: 'min_height'
    },
    'fill-extrusion-opacity': 0.2
  };


  const Map = ReactMapboxGl({
    accessToken: mapboxConfig.key,
    attributionControl: false
  });

  return (
    <Map
      style="mapbox://styles/mapbox/light-v9"
      center={[4.445014, 51.913833]}
      bearing={[20]}
      zoom={[17]}
      pitch={[60]}
      containerStyle={{
        height: '100vh',
        width: '100vw'
      }}
    >
    <Layer
      id="3d-buildings"
      sourceId="composite"
      sourceLayer="building"
      filter={['==', 'extrude', 'true']}
      type="fill-extrusion"
      minZoom={14}
      paint={paintLayer}
    />
    </Map>
  )
}

export default MapContainer