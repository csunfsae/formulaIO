
module.exports = (sequelize, DataTypes) => {
  const accelerometer = sequelize.define('Accelerometer', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});
  // Accelerometer.associate = function(models) {
  //   // associations can be defined here
  // };
  return accelerometer;
};
