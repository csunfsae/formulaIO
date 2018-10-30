'use strict';
module.exports = (sequelize, DataTypes) => {
  const Traction = sequelize.define('Traction', {
    time:   DataTypes.DATE,
    value:  DataTypes.BIGINT,
    device: DataTypes.STRING,
    is_slip:DataTypes.BOOLEAN
  }, {});
  Traction.associate = function(models) {
  };
  return Traction;
};