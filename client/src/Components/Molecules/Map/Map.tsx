import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './Map.scss'

const Map = (props: { coordinates: Coordinates}) => {

const { isLoaded } = useLoadScript({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? "",
})

if(!isLoaded) return (
<div>Loading...</div>
)
else
  return (

  <GoogleMap zoom={13} center={{lat: props.coordinates.lat, lng: props.coordinates.lng }} mapContainerClassName="map">
    <MarkerF position={{ lat: props.coordinates.lat, lng: props.coordinates.lng }}></MarkerF>
  </GoogleMap>
  )
}

export default Map