"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShowGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TvShowGenre.belongsTo(models.TvShow, {
        foreignKey: "tvShowId"
      });

      TvShowGenre.belongsTo(models.Genre, {
        foreignKey: "genreId"
      });
    }
  }
  TvShowGenre.init(
    {
      tvShowId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "TvShowGenre"
    }
  );
  return TvShowGenre;
};
