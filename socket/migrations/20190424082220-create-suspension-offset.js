
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SuspensionOffsets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    time: {
      type: Sequelize.DATE,
    },
    fr: {
      type: Sequelize.DOUBLE,
    },
    fl: {
      type: Sequelize.DOUBLE,
    },
    rr: {
      type: Sequelize.DOUBLE,
    },
    rl: {
      type: Sequelize.DOUBLE,
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
  down: queryInterface => queryInterface.dropTable('SuspensionOffsets'),
};
