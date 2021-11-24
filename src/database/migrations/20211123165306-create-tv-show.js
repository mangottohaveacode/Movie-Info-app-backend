"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TvShows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      firstAirDate: {
        type: Sequelize.DATE
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      posterPath: {
        type: Sequelize.STRING
      },
      originalTitle: {
        type: Sequelize.STRING
      },
      originalLanguage: {
        type: Sequelize.STRING
      },
      status: {
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
    await queryInterface.dropTable("TvShows");
  }
};
