const config = require('config');

const environment = process.env.NODE_ENV || 'development';
const serverPort = config.get(`${environment}.port`);
const databaseConfig = config.get(`${environment}.database`);
const jwtSecret = config.get(`${environment}.jwtSecret`);



module.exports = {
  serverPort,
  databaseConfig,
  jwtSecret
};
