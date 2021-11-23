"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Issue.belongsTo(models.User, {
        foreignKey: "userId"
      });
    }
  }
  Issue.init(
    {
      description: DataTypes.TEXT,
      pageUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Issue"
    }
  );
  return Issue;
};
