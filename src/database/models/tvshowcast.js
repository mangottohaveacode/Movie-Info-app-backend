"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TvShowCast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TvShowCast.belongsTo(models.TvShow, {
        foreignKey: "tvShowId"
      });

      TvShowCast.belongsTo(models.Person, {
        foreignKey: "personId"
      });
    }
  }
  TvShowCast.init(
    {
      tvShowId: DataTypes.INTEGER,
      personId: DataTypes.INTEGER,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "TvShowCast"
    }
  );
  return TvShowCast;
};
