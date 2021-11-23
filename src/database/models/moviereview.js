"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieReview.belongsTo(models.User, {
        foreignKey: "userId"
      });

      MovieReview.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });
    }
  }
  MovieReview.init(
    {
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      seen: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "MovieReview"
    }
  );
  return MovieReview;
};
