import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import axios from 'axios';
const API_KEY = 'e7b4815397036ffe55586a34c2b4331a';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`${API_BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
      const data = response.data;
      data.air_quality = 'Good';
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };


  return (
    <div className="app">
      <h1 className='title'>Weather App</h1>
      <SearchBar onSearch={fetchWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;
