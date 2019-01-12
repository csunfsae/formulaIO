
module.exports = (sequelize, DataTypes) => {
  const Gyroscope = sequelize.define('Gyroscope', {
    x: DataTypes.DOUBLE,
    y: DataTypes.DOUBLE,
    z: DataTypes.DOUBLE,
    time: DataTypes.DATE,
  }, {});
  // Gyroscope.associate = function (models) {
  // };
  return Gyroscope;
};
