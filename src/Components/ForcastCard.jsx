import React from "react";
import getCompass from "./getCompass";
import '../styles/components/ForcastCard.css'
import ListofIcons from "../upload/listofIcons";
import temp_around from "./roundNumber";
import ColorDate from "./ColorDate";

const ForcastCard = ({ information }) => {
  const icons = ListofIcons();
  const colorsDate = ColorDate();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dateColor = {backgroundColor: colorsDate.get(information.weather[0].icon)}

  return (
    <div className="DailyForcast">
      <div id='flipCard'>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div style={dateColor} className="flip-card-front">
              <h1>{days[new Date(information.dt * 1000).getDay()]} {new Date(information.dt * 1000).getDate()} {months[new Date(information.dt * 1000).getMonth()]}</h1>
              <img src={icons.get(information.weather[0].icon)} alt='weather icon' id="weatherForecast"></img>
              <div className="temperature">
                <h2>{temp_around(Number(information.temp.day) - 273.15, 0)}°</h2>
              </div>
              <div className="sunrise">
                <img src={icons.get("14d")} alt='temperature icon'></img>
                <h2>{new Date(information.sunrise * 1000).getHours()}H{new Date(information.sunrise * 1000).getMinutes()}</h2>
              </div>
              <div className='sunset'>
                <img src={icons.get("15d")} alt='temperature icon'></img>
                <h2>{new Date(information.sunset * 1000).getHours()}H{new Date(information.sunset * 1000).getMinutes()}</h2>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="humidity">
                <h2>humidity: {information.humidity}</h2>
                <img src={icons.get("05d")} alt='humidity icon'></img>
              </div>
              <div className="wind">
                <h2>wind speed: {information.wind_speed}m/s</h2>
                <img src={icons.get("06d")} alt='wind icon'></img>
              </div>
              <div className="wind_direction">
                <h2>wind direction: {getCompass(information.wind_deg)}</h2>
              </div>
              <div className="actual_pressure">
                <img src={icons.get("16d")} alt='wind direction icon'></img>
                <h2>atmospheric pressure: {information.pressure} hPa</h2>
              </div>
              <div className="temp">
                <h2>temperature: {temp_around(Number(information.dew_point) - 273.15, 0)}</h2>
                <img src={icons.get("12d")} alt='wind direction icon'></img>
              </div>
              <div className="clouds_percent">
                <h2>cloud percentage: {information.clouds}%</h2>
                <img src={icons.get("03d")} alt='wind direction icon'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default ForcastCard;