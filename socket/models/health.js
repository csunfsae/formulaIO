'use strict';
module.exports = (sequelize, DataTypes) => {
  const Health = sequelize.define('Health', {
    time: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    device: DataTypes.STRING
  }, {});
  Health.associate = function(models) {
    // associations can be defined here
  };
  return Health;
};