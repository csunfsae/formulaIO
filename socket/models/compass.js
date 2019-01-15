
module.exports = (sequelize, DataTypes) => {
  const Compass = sequelize.define('Compass', {
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    z: DataTypes.DOUBLE,
    degree: DataTypes.DOUBLE,	
    time: DataTypes.DATE,
  }, {});
  // Compass.associate = function(models) {
  // };
  return Compass;
};
