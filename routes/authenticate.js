/**
 * Created by moham on 14-May-17.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    var user = {
        username: 'test',
        email: 'test@test.com'
    }
    var token = jwt.sign(user, process.env.SECRET_KEY,{
        expiresIn:4000
    });
    res.json({
        success: true,
        token: token
    })
});

module.exports = router;
