/**
 * Created by moham on 14-May-17.
 */
/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    var token = req.body.token || req.headers['token'];

    if(token){
        res.send("we have a token");
    } else {
        res.send("please send a token");
    }
    res.json({
        success: true,
        token: true
    })
});

module.exports = router;
