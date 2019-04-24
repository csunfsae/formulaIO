
module.exports = (sequelize, DataTypes) => {
  const Accelerator = sequelize.define('Accelerator', {
    time: DataTypes.DATE,
    value: DataTypes.DOUBLE,
  }, {});
  // Accelerator.associate = function (models) {
  //   // associations can be defined here
  // };
  return Accelerator;
};
