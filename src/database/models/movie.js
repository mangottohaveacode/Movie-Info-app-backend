"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.hasMany(models.MovieReview, {
        foreignKey: "movieId"
      });

      Movie.hasMany(models.MovieGenre, {
        foreignKey: "movieId"
      });

      Movie.hasMany(models.MovieCast, {
        foreignKey: "movieId"
      });

      Movie.hasMany(models.MovieCrew, {
        foreignKey: "movieId"
      });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
      runtime: DataTypes.INTEGER,
      posterPath: DataTypes.STRING,
      originalTitle: DataTypes.STRING,
      originalLanguage: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Movie"
    }
  );
  return Movie;
};
