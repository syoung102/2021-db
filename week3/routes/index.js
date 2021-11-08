var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {title: 'Express!'});
});

module.exports = router;
