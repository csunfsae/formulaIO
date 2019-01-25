const fs = require('fs');
const path = require('path');
const Influx = require('influx');

const basename = path.basename(__filename);
const config = require(`${__dirname}/../config/config.influx.js`); /* eslint-disable-line import/no-dynamic-require */
const schemas = [];

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-5) === '.json'))
  .forEach((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, file)));
    schemas.push(data);
  });
const influx = new Influx.InfluxDB({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  schema: schemas,
});

module.exports = influx;
