"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TvShow.hasMany(models.TvShowReview, {
        foreignKey: "tvShowId"
      });

      TvShow.hasMany(models.TvShowGenre, {
        foreignKey: "tvShowId"
      });

      TvShow.hasMany(models.TvShowCrew, {
        foreignKey: "tvShowId"
      });

      TvShow.hasMany(models.TvShowCast, {
        foreignKey: "tvShowId"
      });
    }
  }
  TvShow.init(
    {
      title: DataTypes.STRING,
      firstAirDate: DataTypes.DATE,
      runtime: DataTypes.INTEGER,
      posterPath: DataTypes.STRING,
      originalTitle: DataTypes.STRING,
      originalLanguage: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "TvShow"
    }
  );
  return TvShow;
};
