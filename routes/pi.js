var express = require('express');
var router = express.Router();

const {
  getPIData,
  generateTopology1
} = require('./../data/data');

const {
  getNearestLampList,
  getNotificationIds
} = require('./../engine/topology');

const {
  sendNotification
} = require('./../engine/notification');

router.get('/', function (req, res, next) {
  const data = getPIData();
  res.status(200).json(data);
});

router.post('/', function (req, res, next) {
  const data = req.body;

  const topo1 = generateTopology1();
  const id = parseInt(data.poleId, 10);
  let lampList = getNearestLampList(id, topo1);
  console.log(lampList);
  let personList = getNotificationIds(lampList);

  sendNotification(personList);

  return res.status(200).send(data);
});

module.exports = router;
