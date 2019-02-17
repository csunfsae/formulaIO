
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Compasses', {
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
    az: {
      type: Sequelize.DOUBLE,
    },
    time: {
      type: Sequelize.DATE,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Compasses', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Compasses'),
};
