
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Gyroscopes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    x: {
      type: Sequelize.DOUBLE,
    },
    y: {
      type: Sequelize.DOUBLE,
    },
    z: {
      type: Sequelize.DOUBLE,
    },
    time: {
      type: Sequelize.DATE,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Gyroscopes', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Gyroscopes'),
};
