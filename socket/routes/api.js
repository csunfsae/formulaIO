const express = require('express');
const router = express.Router();

var models  = require('../models');

/* {PST health }. */
router.get('/health', (req, res) => {
    models.Health.findAll().then(function(health) {
    res.json(health);
  });
});
router.post('/health', (req, res) => {
    let time = Date.parse(req.body.time); 
    models.Health.create({
        time:time,
        active:req.body.active,
        device:req.body.device
    }).then(res.status(200).end());
});

router.get('/pressure', (req, res) => {
    models.Pressure.findAll().then(function(pressure) {
    res.json(pressure);
  });
});
router.get('/traction', (req, res) => {
    models.Traction.findAll().then(function(traction) {
    res.json(traction);
  });
});


module.exports = router;
