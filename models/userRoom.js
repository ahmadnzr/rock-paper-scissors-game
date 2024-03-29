"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }

  UserRooms.init(
    {
      playerType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Player 1",
      },
      playerPoint: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isWinner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "UserRooms",
    }
  );
  return UserRooms;
};
