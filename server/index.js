const express = require('express');
const db = require('../database.js');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}!`);
});

module.exports = app;
