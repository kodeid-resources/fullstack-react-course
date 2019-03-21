const massive = require('massive');

let db;

const getDB = async (env) => {
  if (db) return db;
  try {
    if (env.NODE_ENV !== 'production') {
      db = await massive({
        host: '127.0.0.1',
        port: 5432,
        database: 'fullstack_react',
        user: 'postgres',
        password: ''
      });
    } else {
      db = await massive({
        connectionString: process.env['DATABASE_URL']
      });
    }
    console.info('Database connected!');
    return db;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

module.exports = getDB;
