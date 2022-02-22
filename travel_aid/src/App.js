import React from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import List from './Components/List';
import { CssBaseline, Grid } from '@mui/material';


function App() {
  return (
    <> 
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
    
  );
}
export default App;
