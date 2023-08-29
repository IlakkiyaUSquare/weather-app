import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="weather-card">No data Available</div>;
  }

  const { name, sys, main, weather, coord } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <div>Latitude: {coord.lat}</div>
      <div>Longitude: {coord.lon}</div>
      <div>Temperature: {main.temp}°C</div>
      <div>Weather: {weather[0].main}</div>
      <div>Humidity: {main.humidity}%</div>
      <div>Air Quality: Good</div> {/* Add air quality data */}
    </div>
  );
};

export default WeatherCard;


