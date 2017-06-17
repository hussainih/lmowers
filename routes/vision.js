/**
 * Created by moham on 17-Jun-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('vision', { title: 'Express' });
});

module.exports = router;
