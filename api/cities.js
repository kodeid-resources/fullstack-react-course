const router = require('express').Router();
const { getAll, insert } = require('../models/cities.js');

router.get('/', async (req, res) => {
  try {
    const cities = await getAll();
    res.json({ cities });
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { city } = req.body;

    const result = await insert(city);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = router;
