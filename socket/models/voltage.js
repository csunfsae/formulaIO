'use strict';
module.exports = (sequelize, DataTypes) => {
  const voltage = sequelize.define('Voltage', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
    state_charge: DataTypes.BIGINT
  }, {});
  //Voltage.associate = function(models) {
    // associations can be defined here
  //};
  return Voltage;
};