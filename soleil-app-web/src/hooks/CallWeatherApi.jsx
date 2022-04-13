const axios = require('axios');

export default function callWeatherApi() {
    
    const getWeather = async (cityName) => {
        const weatherApi = "85697833375c27c8e8c4af6f8b935823";
        const pointPosition = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName.split(' ').join('-') + "&appid=" + weatherApi;
        try {
            const position = await axios.get(pointPosition);
            const pointWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=" + position.data.coord.lat + "&lon=" + position.data.coord.lon + "&exclude=alerts,hourly,minutely&appid=" + weatherApi;
            const weatherForcast = await axios.get(pointWeather);
            return(weatherForcast);
        } catch (error) {
            console.log(error);
        }
};

  return {
      getWeather
    };
}