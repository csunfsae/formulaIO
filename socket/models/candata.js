
module.exports = (sequelize, DataTypes) => {
  const CanData = sequelize.define('CanData', {
    can_id: DataTypes.DOUBLE,
    data: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    time: DataTypes.DATE,
  }, {});
  // CanData.associate = function (models) {
  //   // associations can be defined here
  // };
  return CanData;
};
