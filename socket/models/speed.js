
module.exports = (sequelize, DataTypes) => {
  const Speed = sequelize.define('Speed', {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    type: DataTypes.STRING,
  }, {});
  // Speed.associate = function(models) {
    // associations can be defined here
  // };
  return Speed;
};
