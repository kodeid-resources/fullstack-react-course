const massive = require('massive');

let db;

const getDB = async () => {
  if (db) return db;
  try {
    db = await massive({
      host: '127.0.0.1',
      port: 5432,
      database: 'fullstack_react',
      user: 'postgres',
      password: ''
    });
    console.info('Database connected!');
    return db;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

module.exports = getDB;
