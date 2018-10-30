'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pressure = sequelize.define('Pressure', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING
  }, {});
  Pressure.associate = function(models) {
    // associations can be defined here
  };
  return Pressure;
};