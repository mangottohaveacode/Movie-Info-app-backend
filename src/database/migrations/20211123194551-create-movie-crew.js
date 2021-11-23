"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MovieCrews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Movies",
          key: "id",
          as: "movieId"
        }
      },
      personId: {
        type: Sequelize.INTEGER,
        references: {
          model: "People",
          key: "id",
          as: "personId"
        }
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MovieCrews");
  }
};
