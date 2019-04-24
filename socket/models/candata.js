
module.exports = (sequelize, DataTypes) => {
  const CanData = sequelize.define('CanData', {
    can_id: DataTypes.DOUBLE,
  }, {});
  // CanData.associate = function (models) {
  //   // associations can be defined here
  // };
  return CanData;
};
