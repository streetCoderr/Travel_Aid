import React, { useState } from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { styled } from '@mui/material/styles';

const ListContainer = styled('div')(({theme}) => ({padding: '25px',}))
const FControl = styled(FormControl)(({theme}) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  }))

const places = [
  {name: "Uche"},
  {name: "Stephen"},
  {name: "Marcel"},
  {name: "Onyi"},
]

const List = () => {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)
  return (
    <ListContainer>
        <Typography variant='h5'>Restaurants, Hotels and Attractions around you</Typography>
        <FControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='type'>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)} labelId='type' label="Type">
                <MenuItem value='restaurants'>Restaurants</MenuItem>
                <MenuItem value='hotels'>Hotels</MenuItem>
                <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
        </FControl>
        <FControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='rating'>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)} label="Rating">
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FControl>
        {places?.map((place, i) => (
          <h1 key={i}>{place.name}</h1>
        ))}
        
    </ListContainer>
  )
}

export default List