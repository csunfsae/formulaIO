
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Pressures', {
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
    value: {
      allowNull: false,
      type: Sequelize.BIGINT,
    },
    device: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Pressures', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Pressures'),
};
