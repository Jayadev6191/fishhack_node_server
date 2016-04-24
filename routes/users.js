var express = require('express');
var router = express.Router();
var request = require('request');

/* POST users listing. */
router.post('/getSiteCodes', function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
