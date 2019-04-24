
module.exports = (sequelize, DataTypes) => {
  const SuspensionOffset = sequelize.define('SuspensionOffset', {
    time: DataTypes.DATE,
  }, {});
  // SuspensionOffset.associate = function (models) {
  //   // associations can be defined here
  // };
  return SuspensionOffset;
};
