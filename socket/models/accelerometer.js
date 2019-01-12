
module.exports = (sequelize, DataTypes) => {
  const accelerometer = sequelize.define('Accelerometer', {
    time: DataTypes.DATE,
    x: DataTypes.BIGINT,
    y: DataTypes.BIGINT,
    z: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});
  // Accelerometer.associate = function(models) {
  //   // associations can be defined here
  // };
  return accelerometer;
};
