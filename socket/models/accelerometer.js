
module.exports = (sequelize, DataTypes) => {
  const accelerometer = sequelize.define('Accelerometer', {
    time: DataTypes.DATE,
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    z: DataTypes.DOUBLE,
    device: DataTypes.STRING,
  }, {});
  // Accelerometer.associate = function(models) {
  //   // associations can be defined here
  // };
  return accelerometer;
};
