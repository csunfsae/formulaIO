
module.exports = (sequelize, DataTypes) => {
  const Speed = sequelize.define('Speed', {
    time: DataTypes.DATE,
    value: DataTypes.FLOAT,
  }, {});
  // Speed.associate = function(models) {
    // associations can be defined here
  // };
  return Speed;
};
