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

router.post('/pressure', (req, res) => {
    let time = Date.parse(req.body.time); 
    models.Pressure.create({
        time:time,
        value:req.body.value,
        device:req.body.device
    }).then(res.status(200).end());
});
router.post('/traction', (req, res) => {
    let time = Date.parse(req.body.time); 
    models.Traction.create({
        time:time,
        value:req.body.value,
        is_slip:req.body.is_slip,
        device:req.body.device
    }).then(res.status(200).end());
});


module.exports = router;
