
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Voltages', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.DATE,
    },
    value: {
      type: Sequelize.BIGINT,
    },
    device: {
      type: Sequelize.STRING,
    },
    state_charge: {
      type: Sequelize.BIGINT,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Voltages', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Voltages'),
};
