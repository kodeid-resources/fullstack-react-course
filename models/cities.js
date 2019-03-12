const getDB = require('../database.js');

const getAll = async () => {
  try {
    const db = await getDB();
    return await db.cities.find({});
  } catch (err) {
    console.error(err.message);
  }
};

const insert = async (city) => {
  try {
    const db = await getDB();
    return await db.cities.insert({ city_name: city });
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = { getAll, insert };
