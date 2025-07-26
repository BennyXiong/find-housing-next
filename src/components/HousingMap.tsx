import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 53.5461,
  lng: -113.4938,
};

const locations = [
  { lat: 53.5444, lng: -113.4909 },
  { lat: 53.5381, lng: -113.5526 },
  { lat: 53.5976, lng: -113.5302 },
];

const HousingMap: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual API key
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {locations.map((pos, i) => (
        <Marker key={i} position={pos} />
      ))}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default HousingMap;
