var express = require('express');
var router = express.Router();

const {
  getMobileData
} = require('./../data/mobile');

router.get('/', function (req, res, next) {
  const data = getMobileData();
  res.status(200).json(data);
});

router.post('/', function (req, res, next) {
  res.status(200).send('ok');
});

module.exports = router;
