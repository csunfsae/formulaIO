
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Locations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    lat: {
      type: Sequelize.INTEGER,
      defaultValue: null,
    },
    long: {
      type: Sequelize.DOUBLE,
      defaultValue: null,
    },
    sats: {
      type: Sequelize.DOUBLE,
      defaultValue: null,
    },
    alt: {
      type: Sequelize.DOUBLE,
      defaultValue: null,
    },
    time: {
      type: Sequelize.DATE,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Locations', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Locations'),
};
