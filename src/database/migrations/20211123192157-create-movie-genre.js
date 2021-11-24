"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MovieGenres", {
      movieId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Movies",
          key: "id",
          as: "movieId"
        }
      },
      genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Genres",
          key: "id",
          as: "genreId"
        }
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
    await queryInterface.dropTable("MovieGenres");
  }
};
