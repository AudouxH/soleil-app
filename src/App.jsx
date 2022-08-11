import React, {useState} from "react";
import GetLocation from './Pages/GetLocation';
import WeatherApp from './Pages/WeatherApp';
import './App.css'

const App = () => {
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState("");
  
  return (
    <div id="app">
      {(weather ?
        <WeatherApp weather={weather}/>
        :<GetLocation cityName={cityName} setName={setCityName} setWeather={setWeather}/>)}
    </div>
      );
    }
    
export default App;