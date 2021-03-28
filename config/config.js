const dotenv = require('dotenv');
const path = require('path');
const appRoot = require('app-root-path');

if (process.env.NODE_APP_ENV === 'local') {
  const pathRoot = `${appRoot}/`;
  dotenv.config({
    path: path.resolve(appRoot.path,`${process.env.NODE_APP_ENV}.env`),
  });

} else dotenv.config();


console.log('hey', process.env.DB_USERNAME);

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  },
};
