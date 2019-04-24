
module.exports = (sequelize, DataTypes) => {
  const SuspensionOffset = sequelize.define('SuspensionOffset', {
    time: DataTypes.DATE,
    fr: DataTypes.DOUBLE,
    fl: DataTypes.DOUBLE,
    rr: DataTypes.DOUBLE,
    rl: DataTypes.DOUBLE,
  }, {});
  // SuspensionOffset.associate = function (models) {
  //   // associations can be defined here
  // };
  return SuspensionOffset;
};
