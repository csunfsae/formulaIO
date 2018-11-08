
module.exports = (sequelize, DataTypes) => {
  const Temperature = sequelize.define('Temperature' , {
    time: DataTypes.DATE,
    value: DataTypes.BIGINT,
    device: DataTypes.STRING,
  }, {});

  // Temperature.associate = function(models){
  // associations can be defined here
  // };

  return Temperature;
}