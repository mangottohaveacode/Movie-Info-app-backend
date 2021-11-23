"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.MovieCast, {
        foreignKey: "personId"
      });

      Person.hasMany(models.MovieCrew, {
        foreignKey: "personId"
      });

      Person.hasMany(models.TvShowCrew, {
        foreignKey: "personId"
      });

      Person.hasMany(models.TvShowCast, {
        foreignKey: "personId"
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      birthday: DataTypes.DATE,
      profilePath: DataTypes.STRING,
      biography: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "Person"
    }
  );
  return Person;
};
