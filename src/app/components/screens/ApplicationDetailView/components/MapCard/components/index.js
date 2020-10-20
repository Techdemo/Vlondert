import React, { useMemo } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxConfig from '../../../../../../../config/mapboxConfig';
import {dataOne} from './data';

const MapContainer = () => {
  
  const polygonPaint = {
    'fill-color': '#008833',
  }

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
    attributionControl: false,
    antialias: true
  });

  return useMemo(() => {
    return (
    <Map
      style="mapbox://styles/mapbox/light-v9"
      center={[4.4450319, 51.9136589]}
      bearing={[10]}
      zoom={[18]}
      pitch={[30]}
      containerStyle={{
        height: '100%',
        width: '100%'
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
      <Layer 
        paint={polygonPaint}
        type="fill"
      >
        <Feature 
          coordinates={dataOne}
        />
      </Layer>
    </Map>
    )
  }, []
  )
}

export default MapContainer;