var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send(['cheetos', 'toast']);
});

router.post('/', function (req, res) {
  var thing = req.body;
  console.log('This is the data from the client ', thing);

  res.sendStatus(200);
});

module.exports = router;
