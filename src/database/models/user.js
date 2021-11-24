"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Issue, {
        foreignKey: "userId"
      });

      User.hasMany(models.MovieReview, {
        foreignKey: "userId"
      });

      User.hasMany(models.TvShowReview, {
        foreignKey: "userId"
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordSalt: DataTypes.STRING,
      passwordHash: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
