module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE,
    sats: DataTypes.DOUBLE,
    alt: DataTypes.DOUBLE,
    time: DataTypes.DATE,
  }, {});
  // Location.associate = function (models) {
  // };
  return Location;
};
