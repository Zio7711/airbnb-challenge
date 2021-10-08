import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle='mapbox://styles/zio7711/ckuhrc3fe9xz718s0d2xplm9b'
      mapboxApiAccessToken={process.env.mapbox_key}
    ></ReactMapGL>
  );
};

export default Map;
