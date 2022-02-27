import React from 'react'
import GoogleMapReact from 'google-map-react'
import { styled } from '@mui/material/styles';



const MapContainer = styled('div') (() => ({
  height: '85vh', width: '100%',
}))
const Map = ({coords, setCoords, setBounds}) => {
  
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyA9CaV35cYuJYbsGL5e9FNFj3lAZoMgiwY'}}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoords({lat: e.center.lat, lng: e.center.lng})
          setBounds({sw: e.bounds.sw, ne: e.bounds.ne})
        }}
        onChildClick={''}
        >

      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map