import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { locationsDict, type Community } from '../library/data';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '100%',
  height: '100%',
};

const HousingMap: React.FC<{ community: Community }> = ({ community }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey, // Replace with your actual API key
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={locationsDict[community].center} zoom={11}>
      {locationsDict[community].marks.map((pos, i) => (
        <MarkerF key={i} position={pos} />
      ))}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default HousingMap;
