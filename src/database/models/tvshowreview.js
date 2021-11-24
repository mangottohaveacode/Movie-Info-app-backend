"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShowReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TvShowReview.belongsTo(models.User, {
        foreignKey: "userId"
      });

      TvShowReview.belongsTo(models.TvShow, {
        foreignKey: "tvShowId"
      });
    }
  }
  TvShowReview.init(
    {
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      seen: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      tvShowId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "TvShowReview"
    }
  );
  return TvShowReview;
};
