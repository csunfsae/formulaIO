'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tractions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      value: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
      device: {
        allowNull: false,
        type: Sequelize.STRING
      }
      is_slip: {
        allowNull: false,
        type: Sequalize.BOOLEAN
      }
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tractions');
  }
};