import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import axios from 'axios';
const API_KEY = 'e7b4815397036ffe55586a34c2b4331a';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [showError, setShowError] = useState(false)
  const fetchWeatherData = async (location) => {
    try {
      setShowError(false)
      console.log("location", location)
      const response = await axios.get(`${API_BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
      console.log("Response", response)

      const data = response.data;
      data.air_quality = 'Good';
      setWeatherData(data);

    } catch (error) {
      console.error('Error fetching weather data:', error.response.status);

      if (Number(error.response.status) === Number(404)) {

        setShowError(true)
        return
      }
    }
  };


  return (
    <div className="app">
      <h1 className='title'>Weather App</h1>
      <SearchBar onSearch={fetchWeatherData} />
      {showError ? <>
        <div className="weather-card">
          <h3 style={{ textAlign: "center" }}>Oops !! No City Found..</h3>
        </div>
      </> :

        <WeatherCard weatherData={weatherData} />
      }
    </div>
  );
}

export default App;
