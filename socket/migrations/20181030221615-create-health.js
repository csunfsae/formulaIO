
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Health', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    time: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    active: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    device: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Health', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Health'),
};
