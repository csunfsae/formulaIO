const express = require('express');

const router = express.Router();

const models = require('../models');

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


module.exports = router;
