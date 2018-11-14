
module.exports = (sequelize, DataTypes) => {
  const accelerometer = sequelize.define('Accelerometer', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
    state_charge: DataTypes.BIGINT,
  }, {});
  // Accelerometer.associate = function(models) {
  //   // associations can be defined here
  // };
  return accelerometer;
};
