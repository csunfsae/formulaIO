
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Accelerometer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.DATE,
    },
    x: {
      type: Sequelize.BIGINT,
    },
    y: {
      type: Sequelize.BIGINT,
    },
    z: {
      type: Sequelize.BIGINT,
    },
    device: {
      type: Sequelize.STRING,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Accelerometer', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Accelerometer'),
};
