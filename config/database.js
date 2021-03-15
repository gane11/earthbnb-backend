const config = require("./index");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;


module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    ssl: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    ssl: true
  }
};