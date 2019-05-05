var express = require('express');
var router = express.Router();

const {
  generateTopology1
} = require('./../data/data');

const {
  getNearestLampList,
  getNotificationIds
} = require('./../engine/topology');

const {
  sendNotification
} = require('./../engine/notification');

// dummy topology

/**
 * Notification endpoint to send firebase notification from certain smart pole
 */

// send if of the lamp. then we will notify
router.get('/id/:id', function (req, res, next) {
  const topo1 = generateTopology1();
  const id = parseInt(req.params.id, 10);
  let lampList = getNearestLampList(id, topo1);
  console.log(lampList);
  let personList = getNotificationIds(lampList);
  console.log(personList);
  sendNotification(personList);

  res.status(200).json(personList);
});

router.post('/', function (req, res, next) {
  const data = req.body;
  return res.status(200).send(data);
});

module.exports = router;
