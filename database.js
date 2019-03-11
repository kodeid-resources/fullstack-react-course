const massive = require('massive');

const setupDB = async () => {
  try {
    const db = await massive({
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
  }
};

const db = setupDB();
module.exports = db;
