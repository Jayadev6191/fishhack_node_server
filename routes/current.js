var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("ok it works");
  res.render('index', { title: 'currentFile' });
});

module.exports = router;
