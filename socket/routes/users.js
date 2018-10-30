const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.io.emit('socketToMe', 'users');
  res.send('respond with a resource.');
});

module.exports = router;
