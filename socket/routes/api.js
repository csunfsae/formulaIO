const express = require('express');

const router = express.Router();

const models = require('../models');

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
