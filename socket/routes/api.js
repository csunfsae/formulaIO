const express = require('express');

const router = express.Router();

const models = require('../models');

router.get('/volatge', (req, res) => {
  models.Voltage.findAll().then((voltage) => {
    res.json(voltage);
  });
});

router.post('voltage', (req, res) => {

});

router.get('/offsets', (req, res) => {
  models.Offsets.findAll().then((offsets) => {
    res.json(offsets);
  });
});

router.post('offsets', (req, res) => {

});

router.get('/speed', (req, res) => {
  models.Speeds.findAll().then((speed) => {
    res.json(speed);
  });
});

router.post('speed', (req, res) => {

});

router.get('/health', (req, res) => {
  models.Health.findAll().then((health) => {
    res.json(health);
  });
});

router.post('/health', (req, res) => {
  const time = Date.parse(req.body.time);
  models.Health.create({
    time,
    active: req.body.active,
    device: req.body.device,
  }).then(res.status(200).end());
});

router.get('/pressure', (req, res) => {
  models.Pressure.findAll().then((pressure) => {
    res.json(pressure);
  });
});

router.post('/pressure', (req, res) => {
  const time = Date.parse(req.body.time);
  models.Pressure.create({
    time,
    value: req.body.value,
    device: req.body.device,
  }).then(res.status(200).end());
});

router.get('/traction', (req, res) => {
  models.Traction.findAll().then((traction) => {
    res.json(traction);
  });
});

router.post('/traction', (req, res) => {
  const time = Date.parse(req.body.time);
  models.Traction.create({
    time,
    value: req.body.value,
    is_slip: req.body.is_slip,
    device: req.body.device,
  }).then(res.status(200).end());
});

module.exports = router;
