
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Tractions', {
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
    is_slip: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
  }).then(() => {
    Sequelize.query("SELECT create_hypertable('Tractions', 'time')");
  }),
  down: queryInterface => queryInterface.dropTable('Tractions'),
};
