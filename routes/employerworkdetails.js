/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('employer-work-details', { title: 'Lawn Mowers' });
});

module.exports = router;
