const express = require('express');

const router = express.Router();
const models = require('../models');

function createVoltage(body) {
  return models.Voltage.create({
    time: Date.parse(body.time),
    value: body.value,
    device: body.device,
    state_charge: body.state_charge,
  });
}
function createOffsets(body) {
  return models.Offsets.create({
    time: Date.parse(body.time),
    value: body.value,
    device: body.device,
  });
}
function createSpeed(body) {
  return models.Speed.create({
    time: Date.parse(body.time),
    value: body.value,
    type: body.type,
  });
}
function createHealth(body) {
  return models.Health.create({
    time: Date.parse(body.time),
    active: body.active,
    device: body.device,
  });
}
function createPressure(body) {
  return models.Pressure.create({
    time: Date.parse(body.time),
    value: body.value,
    device: body.device,
  });
}
function createTraction(body) {
  return models.Traction.create({
    time: Date.parse(body.time),
    value: body.value,
    is_slip: body.is_slip,
    device: body.device,
  });
}
function createLocation(body) {
  return models.Location.create({
    time: Date.parse(body.time),
    lat: body.lat,
    long: body.long,
    cell_id: body.cell_id,
  });
}
function createGyroscope(body) {
  return models.Gyroscope.create({
    time: Date.parse(body.time),
    x: body.x,
    y: body.y,
    z: body.z,
    device: body.device,
  });
}
function createAccelerometer(body) {
  return models.Accelerometer.create({
    time: Date.parse(body.time),
    x: body.x,
    y: body.y,
    z: body.z,
    device: body.device,
  });
}
function createCompass(body) {
  var degreeDirection = 90 - Math.atan(body.x / body.y);
  return models.Compass.create({
    time: Date.parse(body.time),
    x: body.x,
    y: body.y,
    z: body.z,
    direction: degreeDirection,
    device: body.device,
  });
}

// Post Routes
router.post('/traction', (req, res) => {
  createTraction(req.body)
    .then(res.status(200).end());
});
router.post('/pressure', (req, res) => {
  createPressure(req.body)
    .then(res.status(200).end());
});
router.post('/health', (req, res) => {
  createHealth(req.body)
    .then(res.status(200).end());
});
router.post('/voltage', (req, res) => {
  createVoltage(req.body)
    .then(res.status(200).end());
});
router.post('/offsets', (req, res) => {
  createOffsets(req.body)
    .then(res.status(200).end());
});
router.post('/speed', (req, res) => {
  createSpeed(req.body)
    .then(res.status(200).end());
});
router.post('/location', (req, res) => {
  createLocation(req.body)
    .then(res.status(200).end());
});
router.post('/accelerometer', (req, res) => {
  createAccelerometer(req.body)
    .then(res.status(200).end());
});
router.post('/gyroscope', (req, res) => {
  createGyroscope(req.body)
    .then(res.status(200).end());
});
router.post('/compass', (req, res) => {
  createCompass(req.body)
    .then(res.status(200).end());
});

// GET Routes
router.get('/offsets', (req, res) => {
  models.Offsets.findAll().then((offsets) => {
    res.json(offsets);
  });
});
router.get('/voltage', (req, res) => {
  models.Voltage.findAll().then((voltage) => {
    res.json(voltage);
  });
});
router.get('/speed', (req, res) => {
  models.Speed.findAll().then((speed) => {
    res.json(speed);
  });
});
router.get('/health', (req, res) => {
  models.Health.findAll().then((health) => {
    res.json(health);
  });
});
router.get('/pressure', (req, res) => {
  models.Pressure.findAll().then((pressure) => {
    res.json(pressure);
  });
});
router.get('/traction', (req, res) => {
  models.Traction.findAll().then((traction) => {
    res.json(traction);
  });
});
router.get('/location', (req, res) => {
  models.Location.findAll().then((location) => {
    res.json(location);
  });
});
router.get('/accelerometer', (req, res) => {
  models.Accelerometer.findAll().then((accelerometer) => {
    res.json(accelerometer);
  });
});
router.get('/gyroscope', (req, res) => {
  models.Gyroscope.findAll().then((gyroscope) => {
    res.json(gyroscope);
  });
});
router.get('/compass', (req, res) => {
  models.Compass.findAll().then((compass) => {
    res.json(compass);
  });
});

module.exports = {
  router,
  createVoltage,
  createOffsets,
  createSpeed,
  createHealth,
  createPressure,
  createTraction,
  createAccelerometer,
  createGyroscope,
  createCompass,
};
