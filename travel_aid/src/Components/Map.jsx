import React from 'react'
import GoogleMapReact from 'google-map-react'
import { styled } from '@mui/material/styles';



const MapContainer = styled('div') (({theme}) => ({
  height: '85vh', width: '100%',
}))
const Map = () => {

  const coordinates = {lat: 0, lng: 0}
  
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyA9CaV35cYuJYbsGL5e9FNFj3lAZoMgiwY'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}>

      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map