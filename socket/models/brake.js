
module.exports = (sequelize, DataTypes) => {
  const Brake = sequelize.define('Brake', {
    time: DataTypes.DATE,
    value: DataTypes.DOUBLE,
  }, {});
  // Brake.associate = function (models) {
  //   // associations can be defined here
  // };
  return Brake;
};
