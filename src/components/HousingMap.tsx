import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 53.5461,
  lng: -113.4938,
};

export const edmontonLocations = [
  {
    id: '1',
    name: 'Canora Place',
    lat: 53.5486,
    lng: -113.5806,
  },
  {
    id: '2',
    name: 'Rosslyn Apartments',
    lat: 53.5865,
    lng: -113.5287,
  },
  {
    id: '3',
    name: 'Strathcona Residence',
    lat: 53.5195,
    lng: -113.4894,
  },
  {
    id: '4',
    name: 'Downtown Commons',
    lat: 53.5415,
    lng: -113.5006,
  },
  {
    id: '5',
    name: 'Mill Woods Housing',
    lat: 53.4599,
    lng: -113.4521,
  },
  {
    id: '6',
    name: 'Westmount Living',
    lat: 53.5571,
    lng: -113.5387,
  },
  {
    id: '7',
    name: 'Bonnie Doon Residence',
    lat: 53.5241,
    lng: -113.4653,
  },
  {
    id: '8',
    name: 'Southgate Suites',
    lat: 53.4791,
    lng: -113.5218,
  },
  {
    id: '9',
    name: 'Northgate Terrace',
    lat: 53.6078,
    lng: -113.4994,
  },
  {
    id: '10',
    name: 'Capilano Apartments',
    lat: 53.5420,
    lng: -113.4103,
  },
];


const HousingMap: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAOEZzTGhOjO8jkbUVBH7fzeA2cGWYwzHw', // Replace with your actual API key
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
      {edmontonLocations.map((pos, i) => (
        <MarkerF key={i} position={pos} />
      ))}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
};

export default HousingMap;
