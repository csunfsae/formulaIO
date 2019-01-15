
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
    degree: {
      type: Sequalize.DOUBLE,
    },
    time: {
      type: Sequelize.DATE,
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
  down: queryInterface => queryInterface.dropTable('Compasses'),
};
