require("dotenv").config();

const database = {
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT
};

const config = { database };
module.exports = {
  config,
  development: {
    ...database,
    database: database.name
  },
  test: {
    ...database,
    database: database.name
  },
  production: {
    ...database,
    database: database.name
  }
};
