import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

type Props = {}


// 35.75129233910607, -5.8291821799893695
function Map({}: Props) {
  const location = {
    address: '8C7PQ52C+G7, Tangier 90090',
    lat: 35.751442,
    lng: -5.829255,
  }
  return (
    <div className="p-2">
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: process.env.GOOGLE_MAP_API || "AIzaSyDO9DFWsX6c8lzdlIl1oE0Ih2Naqb1I28c" ,
            libraries:['places', 'geometry', 'drawing', 'visualization'],
          }}
          defaultCenter={location}
          defaultZoom={19}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default Map