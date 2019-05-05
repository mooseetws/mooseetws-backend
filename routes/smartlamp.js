var express = require('express');
var router = express.Router();

// const smartStore = require('./../db/simplestore');

// todo not implemented
router.post('/', function (req, res, next) {
  const data = req.body;
  // let status = smartStore.addOrUpdatePerson(data);
  return res.status(200).send(data);
});

module.exports = router;
