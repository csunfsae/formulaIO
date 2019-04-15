module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Controls', {
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
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Controls', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Controls'),
};
