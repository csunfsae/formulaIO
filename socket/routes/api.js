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
function createTemperature(body) {
  return models.Temperature.create({
    time: Date.parse(body.time),
    value: body.value,
    device: body.device,
  });
}
function createOffsets(body) {
  return models.Offset.create({
    time: Date.parse(body.time),
    value: body.value,
    device: body.device,
  });
}
function createSpeed(body) {
  return models.Speed.create({
    time: Date.parse(body.time),
    value: body.value,
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
    sats: body.sats,
    alt: body.alt,
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
  return models.Compass.create({
    time: Date.parse(body.time),
    x: body.x,
    y: body.y,
    z: body.z,
    az: body.az,
    device: body.device,
  });
}
function createSteering(body) {
  return models.Steering.create({
    time: Date.parse(body.time),
    value: body.value,
  });
}
function createAccelerator(body) {
  return models.Accelerator.create({
    time: Date.parse(body.time),
    value: body.value,
  });
}
function createCanData(body) {
  return models.CanData.create({
    time: Date.parse(body.time),
    can_id: body.id,
    data: body.data,
    value: body.value,
  });
}
function createSuspensionOffset(body) {
  return models.SuspensionOffset.create({
    time: Date.parse(body.time),
    fl: body.fl,
    fr: body.fr,
    rl: body.rl,
    rr: body.rr,
  });
}
function createBrake(body) {
  return models.Brake.create({
    time: Date.parse(body.time),
    value: body.value,
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
router.post('/temperature', (req, res) => {
  createTemperature(req.body)
    .then(res.status(200).end());
});
router.post('/steering', (req, res) => {
  createSteering(req.body)
    .then(res.status(200).end());
});
router.post('/accelerator', (req, res) => {
  createAccelerator(req.body)
    .then(res.status(200).end());
});
router.post('/can_data', (req, res) => {
  createCanData(req.body)
    .then(res.status(200).end());
});
router.post('/suspension_offset', (req, res) => {
  createSuspensionOffset(req.body)
    .then(res.status(200).end());
});
router.post('/brake', (req, res) => {
  createBrake(req.body)
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
router.get('/temperature', (req, res) => {
  models.Temperature.findAll().then((temperature) => {
    res.json(temperature);
  });
});
router.get('/steering', (req, res) => {
  models.Steering.findAll().then((steering) => {
    res.json(steering);
  });
});
router.get('/accelerator', (req, res) => {
  models.Accelerator.findAll().then((accelerator) => {
    res.json(accelerator);
  });
});
router.get('/can_data', (req, res) => {
  models.CanData.findAll().then((canData) => {
    res.json(canData);
  });
});
router.get('/suspension_offset', (req, res) => {
  models.SuspensionOffset.findAll().then((suspensionOffset) => {
    res.json(suspensionOffset);
  });
});
router.get('/brake', (req, res) => {
  models.Brake.findAll().then((brake) => {
    res.json(brake);
  });
});

// router.get('/3d/gyro', (req, res) => {
//   res.json([]);
// });


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
  createTemperature,
  createLocation,
  createSteering,
  createAccelerator,
  createCanData,
  createSuspensionOffset,
  createBrake,
};
