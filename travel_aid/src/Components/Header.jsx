import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material' 
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';

const MyToolbar = styled(Toolbar)(() => ({
  display: 'flex', justifyContent: 'space-between',
}));

const Title = styled(Typography)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%', position: 'absolute',
  pointerEvents: 'none', display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0), 
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'), 
    width: '100%', 
    [theme.breakpoints.up('md')]: { 
      width: '20ch' 
    },
  },
}));

const Header = ( {setCoords} ) => {
  const [autoComplete, setAutoComplete] = useState(null)

  const onload = (autoc) => setAutoComplete(autoc)

  const onPlaceChanged = () => {
    const lat = autoComplete?.getPlace().geometry.location.lat()
    const lng = autoComplete?.getPlace().geometry.location.lng()
    setCoords({lat, lng})
  }

  return (
    <AppBar position="static">
      <MyToolbar>
        <Title variant="h5">
          Travel Aid
        </Title>
        <Box display='flex'>
          <Title variant="h6">
            Explore new places
          </Title>
          <Autocomplete onLoad={onload} onPlaceChanged={onPlaceChanged}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
              placeholder="Search…"
              />
            </Search>
          </Autocomplete>
        </Box>
      </MyToolbar>
    </AppBar>
  );
}

export default Header