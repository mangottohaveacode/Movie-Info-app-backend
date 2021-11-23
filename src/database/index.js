const { Sequelize } = require("sequelize");
const { database } = require("../config");

const sequelize = new Sequelize(
  database.name,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
    define: {
      timestamps: false
    }
  }
);

module.exports = { sequelize };
