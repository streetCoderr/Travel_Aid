import React from 'react'
import GoogleMapReact from 'google-map-react'
import { styled } from '@mui/material/styles';
import { Box, Paper, Rating, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



const MapContainer = styled('div') (() => ({
  height: '100vh', width: '100%',
}))

const Map = ({coords, setCoords, setBounds, places, setChildClicked}) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyA9CaV35cYuJYbsGL5e9FNFj3lAZoMgiwY'}}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoords({lat: e.center.lat, lng: e.center.lng})
          setBounds({sw: e.bounds.sw, ne: e.bounds.ne})
        }}
        onChildClick={''}
        >
          {places?.map((place) => 
            <Box
              key={place.location_id}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
            >
              {isMobile ? 
                (<LocationOnOutlinedIcon />) :
                (<Paper elevation={3} sx={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                  <Typography variant='subtitle2' gutterBottom >{place.name}</Typography>
                  <img 
                    src={place.photo ? place.photo.images.small.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name} onClick={() => {
                      console.log(place.location_id)
                      setChildClicked(place.location_id)}}
                  />
                  <Rating name='read-only' value={Number(place.rating)} readOnly size='small' />
                </Paper>)
              }
            </Box>
          )}
          

      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map