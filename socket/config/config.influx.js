require('dotenv').config();

module.exports = {
  database: process.env.INFLUX_DATABASE,
  username: process.env.INFLUX_USERNAME,
  password: process.env.INFLUX_PASSWORD,
  host: process.env.INFLUX_HOST,
};
