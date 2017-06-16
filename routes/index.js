var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  for(  a=0; a<=10000000; a++){


  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
