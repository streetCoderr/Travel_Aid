import React from 'react'
import PlaceDetails from './PlaceDetails';
import { Typography, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';

const ListContainer = styled('div')(({theme}) => ({padding: '25px',}))
const FControl = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  }))


const List = ( { places, type, setType, rating, setRating, childClicked} ) => {


  return (
    <ListContainer>
        <Typography variant='h5'>Restaurants, Hotels and Attractions around you</Typography>
        <FControl variant='standard'>
            <InputLabel id='type'>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)} labelId='type' label="Type">
                <MenuItem value='restaurants'>Restaurants</MenuItem>
                <MenuItem value='hotels'>Hotels</MenuItem>
                <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
        </FControl>
        <FControl variant='standard'>
            <InputLabel id='rating'>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)} label="Rating">
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FControl>
        <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto'}}>
          {places?.map((place) => (
            <Grid key={place.location_id} item xs={12}>
              <PlaceDetails clicked={childClicked === place.location_id} place={place}/>
            </Grid>
          ))}
        </Grid>
    </ListContainer>
  )
}

export default List