
const { Sequelize } = require('sequelize');
const {envs} = require('./environment');
// Creando una nueva instancia de sequelize
const sequelize = new Sequelize(envs.URL_DB, {
  logging: false, 
  host: 'localhost',
  dialect: 'postgres',
});

const authenticated = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'error setting connection' });
}
}

const syncUp = async() => {
  try {
    await sequelize.sync()
    .then(() => {
      console.log('Model synced successfully');
    })
  }
  catch (error) {
    console.error('Error syncing model:', error);
  }
}

module.exports = {sequelize, authenticated, syncUp};
