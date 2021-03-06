
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Canbuses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    can_id: {
      type: Sequelize.STRING,
    },
    can_data: {
      type: Sequelize.STRING,
    },
    device: {
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
  down: queryInterface => queryInterface.dropTable('Canbuses'),
};
