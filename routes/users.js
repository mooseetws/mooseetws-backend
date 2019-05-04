var express = require('express');
var router = express.Router();

const {
  generateTopology1
} = require('./../data/data');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let topology = generateTopology1();
  res.status(200).json(topology);
});

module.exports = router;
