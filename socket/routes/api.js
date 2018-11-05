const express = require('express');
const router = express.Router();

var models  = require('../models');

/* {PST health }. */
router.get('/health', (req, res) => {
    models.Health.findAll().then(function(health) {
    res.json(health);
  });
});



module.exports = router;
