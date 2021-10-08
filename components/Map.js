import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { LocationMarkerIcon } from '@heroicons/react/solid';

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
    latitude: center.latitude - 0.1,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle='mapbox://styles/zio7711/ckuhrc3fe9xz718s0d2xplm9b'
      mapboxApiAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className='cursor-pointer text-2xl animate-bounce relative w-10'
              aria-label='push-pin'
              onClick={() => {
                setSelectedLocation(result);
              }}
            >
              <LocationMarkerIcon layout='fill' />
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}
              onClose={() => {
                setSelectedLocation({});
              }}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
