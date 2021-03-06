
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('CanData', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    can_id: {
      type: Sequelize.DOUBLE,
    },
    data: {
      type: Sequelize.STRING,
    },
    value: {
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
  down: queryInterface => queryInterface.dropTable('CanData'),
};
