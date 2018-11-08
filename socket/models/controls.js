
module.exports = (sequelize, DataTypes) => {
  const Controls = sequelize.define('Controls', {
    time: DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    device: DataTypes.STRING,
  }, {});
  // Controls.associate = function(models){
  // associations can be defined here
  // };
  return Controls;
};
