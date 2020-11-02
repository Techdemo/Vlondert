import React, { useMemo } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxConfig from '../../../../../../config/mapboxConfig';
import {dataOne, dataTwo, dataThree} from './data';

import { OverlayContext } from '../../../../../components/modules/ApplicationOverlay/context';

const MapContainer = () => {
  const { active, setActive, swipeActive, setSwipeActive } = React.useContext(OverlayContext);

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
      center={[4.445014, 51.913833]}
      bearing={[20]}
      zoom={[19]}
      onClick={() => {
        setActive(false)
        setSwipeActive(false)
      }}
      pitch={[50]}
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
      <Layer 
        paint={polygonPaint}
        type="fill"
      >
        <Feature 
          coordinates={dataOne}
          onClick={() => setActive(!active)}
        />
        <Feature 
          coordinates={dataTwo}
          onClick={() => setActive(!active)}
        />
        <Feature 
          coordinates={dataThree} 
          onClick={() => setActive(!active)}
        />
      </Layer>
    </Map>
    )
  }, []
  )
}

export default MapContainer