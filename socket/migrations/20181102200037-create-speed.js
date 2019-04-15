
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Speeds', {
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
    Sequelize.query("SELECT create_hypertable('Speeds', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Speeds'),
};
