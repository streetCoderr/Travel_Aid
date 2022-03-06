import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import List from './Components/List';
import { CssBaseline, Grid } from '@mui/material';
import { getPlaces } from './api/travelAdvisor';


function App() {
  const [coords, setCoords] = useState({})
  const [defCoords, setDefCoords] = useState({})
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [bounds, setBounds] = useState({})
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)
  const [childClicked, setChildClicked] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
      setCoords({lat: latitude, lng: longitude})
      setDefCoords({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    getPlaces(type, bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data?.filter(place => place.name))
        setFilteredPlaces([])
      })
  }, [bounds, type])

  useEffect(() => {
    setFilteredPlaces([])
    setFilteredPlaces(places?.filter(place => Number(place.rating) >= rating))
  }, [places, rating])
  
  return (
    <> 
      <CssBaseline />
      <Header setCoords={setCoords}/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlaces?.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
            childClicked={childClicked}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Map  
            coords={coords}
            defCoords={defCoords}
            setCoords={setCoords}
            setBounds={setBounds}
            places={filteredPlaces?.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
