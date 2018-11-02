
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Health'),
};