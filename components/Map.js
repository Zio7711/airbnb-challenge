import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({ searchResults }) => {
  //transform search results to results needed
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
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
