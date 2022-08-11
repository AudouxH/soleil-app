import '../styles/pages/GetLocation.css';
import React from "react";
import callWeatherApi from '../hooks/CallWeatherApi';

const GetLocation = ({cityName, setName, setWeather}) => {
  const { getWeather } = callWeatherApi();

  const getWeatherData = async () => {
    const weatherData = await getWeather(cityName);
    setWeather(weatherData);
  }

  return (
    <div id="getLocation">
      <div id="locFrom">
        <h1>Enter a city name</h1>
        <input id="CityName" placeholder="Search for location" onChange={(event) => {
          setName(event.target.value);
        }}></input>
        <button onClick={getWeatherData}>Search</button>
      </div>
    </div>
  );
}

export default GetLocation;