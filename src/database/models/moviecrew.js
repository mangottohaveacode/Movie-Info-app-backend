"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieCrew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MovieCrew.belongsTo(models.Movie, {
        foreignKey: "movieId"
      });

      MovieCrew.belongsTo(models.Person, {
        foreignKey: "personId"
      });
    }
  }
  MovieCrew.init(
    {
      movieId: DataTypes.INTEGER,
      personId: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "MovieCrew"
    }
  );
  return MovieCrew;
};
