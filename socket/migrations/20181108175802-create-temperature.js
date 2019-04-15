
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Temperatures', {
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
    type: {
      type: Sequelize.STRING,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Temperatures', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Temperatures'),
};
