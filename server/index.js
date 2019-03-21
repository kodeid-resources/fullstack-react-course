require('dotenv').config();
const express = require('express');
const getWeatherByCity = require('../models/weather.js');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/cities', require('../api/cities.js'));
app.use('/api/weather', require('../api/weather.js'));

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}!`);
});

module.exports = app;
