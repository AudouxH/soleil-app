import '../styles/components/CurrentWeather.css'
import React from "react";
import temp_around from '../Components/roundNumber'
import getCompass from './getCompass';
import ListofIcons from '../upload/listofIcons';
import ColorDate from "./ColorDate";

const CurrentWeather = ({ weather }) => {
    const colorsDate = ColorDate();
    const icons = ListofIcons();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dateColor = { backgroundColor: colorsDate.get(weather.data.current.weather[0].icon) }

    return (
        <div id="CurrentWeather" style={dateColor}>
            <div id='header'>
                <h1>{days[new Date(weather.data.current.dt * 1000).getDay()]} {new Date(weather.data.current.dt * 1000).getDate()} {months[new Date(weather.data.current.dt * 1000).getMonth()]}</h1>
                <img src={icons.get(weather.data.current.weather[0].icon)} alt='weather icon'></img>
            </div>
            <div id='description'>
                <div id='firstDesc'>
                    <h2>actual temp: {temp_around(Number(weather.data.current.temp) - 273.15, 0)}°</h2>
                    <h2>feels temp: {temp_around(Number(weather.data.current.feels_like) - 273.15, 0)}°</h2>
                    <h2>astmosferic temp: {temp_around(Number(weather.data.current.dew_point) - 273.15, 0)}°</h2>
                </div>
                <div id='secondDesc'>
                    <h2>pressure: {weather.data.current.pressure}hPa</h2>
                    <h2>humidity: {weather.data.current.humidity}%</h2>
                    <h2>clouds: {weather.data.current.clouds}%</h2>
                    <h2>wind speed: {weather.data.current.wind_speed}m/s and go to {getCompass(weather.data.current.wind_deg)}</h2>
                </div>
                <div id='thirdDesc'>
                    <h2>sunset Time: {new Date(weather.data.current.sunset * 1000).toLocaleTimeString()}</h2>
                    <h2>sunrise Time: {new Date(weather.data.current.sunrise * 1000).toLocaleTimeString()}</h2>
                    <h2>description: {weather.data.current.weather[0].description}</h2>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;