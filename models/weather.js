const request = require('axios');

const API_KEY = process.env.API_KEY;

const getWeatherByCity = (city) => {
  const response = request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`
  );
  return response;
};

module.exports = getWeatherByCity;
