const express = require('express');
const getWeatherByCity = require('../models/weather.js');

const router = express.Router();

router.get('/:city', async (req, res) => {
  const { city } = req.params;

  const weather = await getWeatherByCity(city);
  res.json(weather.data);
});

module.exports = router;
