var express = require('express');
var router = express.Router();

const {
  generateTopology1
} = require('./../data/data');

const {
  getNearestLampList
} = require('./../engine/topology');

const topo1 = generateTopology1();

router.get('/id/:id', function (req, res, next) {
  const id = parseInt(req.params.id, 10);
  let lampList = getNearestLampList(id, topo1);
  res.status(200).json(lampList);
});

router.post('/', function (req, res, next) {
  const data = req.body;
  return res.status(200).send(data);
});

module.exports = router;
