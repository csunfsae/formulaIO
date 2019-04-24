
module.exports = (sequelize, DataTypes) => {
  const Steering = sequelize.define('Steering', {
    time: DataTypes.DATE,
    value: DataTypes.DOUBLE,
  }, {});
  // Steering.associate = function (models) {
  //   // associations can be defined here
  // };
  return Steering;
};
