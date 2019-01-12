
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Gyroscopes', {
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
  down: queryInterface => queryInterface.dropTable('Gyroscopes'),
};
