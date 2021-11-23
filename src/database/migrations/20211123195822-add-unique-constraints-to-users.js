"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Users", {
      type: "UNIQUE",
      fields: ["username"],
      name: "unique_user_username"
    });
    await queryInterface.addConstraint("Users", {
      type: "UNIQUE",
      fields: ["email"],
      name: "unique_user_email"
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Users", "unique_user_username");
    await queryInterface.removeConstraint("Users", "unique_user_email");
  }
};
