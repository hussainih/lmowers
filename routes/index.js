var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  for(  a=0; a<=10000000; a++){
    for(b=0;b<=1000000; b++){
      c =a*b;
    }

  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
