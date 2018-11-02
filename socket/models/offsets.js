'use strict';
module.exports = (sequelize, DataTypes) => {
  const offsets = sequelize.define('Offsets', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING
  }, {});
  //Offsets.associate = function(models) {
    // associations can be defined here
  //};
  return Offsets;
};