var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  // request.get('',function(error, response, body){

  // });

  res.send('respond with a resource');
});

module.exports = router;
