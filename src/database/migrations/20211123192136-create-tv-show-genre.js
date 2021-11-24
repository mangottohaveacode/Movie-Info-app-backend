"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TvShowGenres", {
      tvShowId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "TvShows",
          key: "id",
          as: "tvShowId"
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
    await queryInterface.dropTable("TvShowGenres");
  }
};
