"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShowCrew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TvShowCrew.belongsTo(models.TvShow, {
        foreignKey: "tvShowId"
      });

      TvShowCrew.belongsTo(models.Person, {
        foreignKey: "personId"
      });
    }
  }
  TvShowCrew.init(
    {
      tvShowId: DataTypes.INTEGER,
      personId: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "TvShowCrew"
    }
  );
  return TvShowCrew;
};
