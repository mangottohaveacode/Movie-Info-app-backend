"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieCast.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });

      MovieCast.belongsTo(models.Person, {
        foreignKey: "personId"
      });
    }
  }
  MovieCast.init(
    {
      movieId: DataTypes.INTEGER,
      personId: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "MovieCast"
    }
  );
  return MovieCast;
};
