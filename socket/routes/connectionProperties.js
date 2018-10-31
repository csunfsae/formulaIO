const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});
