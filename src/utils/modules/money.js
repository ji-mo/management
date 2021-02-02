const { DataTypes } = require('sequelize');
const sequelize = require('./db');

module.exports = sequelize.define(
  'Money',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    money: {
      type: DataTypes.STRING,
    },
    should: {
      type: DataTypes.STRING,
    },
    reality: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true,
    createdAt: false,
    updatedAt: false,
  },
);
