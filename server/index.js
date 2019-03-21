require('dotenv').config();
const path = require('path');
const express = require('express');
const getWeatherByCity = require('../models/weather.js');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use('/api/cities', require('../api/cities.js'));
app.use('/api/weather', require('../api/weather.js'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}!`);
});

module.exports = app;
