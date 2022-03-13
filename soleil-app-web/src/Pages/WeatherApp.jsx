import '../styles/pages/WeatherApp.css';
import ForcastCard from '../Components/ForcastCard';
import CurrentWeather from '../Components/CurrentWeather';
import React from "react";

const WeatherApp = ({ weather }) => {
    return (
        <div id="WeatherApp">
            <h1 id="title">Welcome on Weathery, your personal weather assistant !</h1>
            <div id='WeatherDisplay'>
                <CurrentWeather weather={weather} />
                <div id='dailyForecasts'>
                    {weather ? weather.data.daily.map((daily, index) => {
                        return (
                            <ForcastCard key={index} information={daily} />
                        );
                    }) : <h></h>}
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;