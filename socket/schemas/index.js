const Influx = require('influx');

const config = require(`${__dirname}/../config/config.influx.js`); /* eslint-disable-line import/no-dynamic-require */
const schemas = [{
  measurement: 'compass',
  fields: {
    x: Influx.FieldType.FLOAT,
    y: Influx.FieldType.FLOAT,
    z: Influx.FieldType.FLOAT,
  },
  tags: ['device'],
}];

const influx = new Influx.InfluxDB({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  schema: schemas,
});

module.exports = influx;
