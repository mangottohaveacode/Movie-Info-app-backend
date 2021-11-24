"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TvShowCasts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tvShowId: {
        type: Sequelize.INTEGER,
        references: {
          model: "TvShows",
          key: "id",
          as: "tvShowId"
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
    await queryInterface.dropTable("TvShowCasts");
  }
};
