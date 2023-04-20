import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import Park_Card from './components/Park_Card'

function App() {
    const park_settings = [
        {
            title: 'USACE Park',
            subtitle: 'NE Texas Park',
            image: "./Ranger.jpg",
            description: 'Home of the rabbits'
        }




    ];



    return (
      <div className='App'>
        <h1 className='App-header'>Welcome to the Sign Translation Homepage!</h1>
        <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        className ='ParkCard'
        >
        <Grid item xs={12}>
        </Grid> 

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Park_Card 
                title = {park_settings[0].title}
                subtitle = {park_settings[0].subtitle}
                image = {park_settings[0].image}
                description = {park_settings[0].description}
            >
            </Park_Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Park_Card 
                title = {park_settings[0].title}
                subtitle = {park_settings[0].subtitle}
                image = {park_settings[0].image}
                description = {park_settings[0].description}
            >
            </Park_Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Park_Card 
                title = {park_settings[0].title}
                subtitle = {park_settings[0].subtitle}
                image = {park_settings[0].image}
                description = {park_settings[0].description}
            >
            </Park_Card>
            </Grid>
        </Grid>

      </div>
    );
}

export default App;
