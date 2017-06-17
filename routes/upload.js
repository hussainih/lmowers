/**
 * Created by moham on 17-Jun-17.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var util = require('util');
var mime = require('mime');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var form = '<!DOCTYPE HTML><html><body>' +
    "<form method='post' action='/upload' enctype='multipart/form-data'>" +
    "<input type='file' name='image'/>" +
    "<input type='submit' /></form>" +
    '</body></html>';

var gcloud = require('gcloud')({
    keyFilename: 'Group4-d1991f17d2b7.json',
    projectId: 'group4-168406'
});


var vision = gcloud.vision();
router.post('/', upload.single('image'), function(req, res, next){

    // Choose what the Vision API should detect
    // Choices are: faces, landmarks, labels, logos, properties, safeSearch, texts
    var types = ['labels'];
    console.log("what the fuck;");
    // Send the image to the Cloud Vision API
    vision.detect(req.file.path, types, function(err, detections, apiResponse) {
        if (err) {
            res.end('Cloud Vision Error');
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<!DOCTYPE HTML><html><body background="/images/lawn.jpg">');
            res.write(form);
            // Base64 the image so we can display it on the page
            res.write('<img width=200 src="' + base64Image(req.file.path) + '"><br>');
            res.write('<div style="background-color:gray; color:blue; widht:300px">')
            // Write out the JSON output of the Vision API
            res.write(JSON.stringify(detections, null, 4));

            res.write('</div>');
            // Delete file (optional)
            fs.unlinkSync(req.file.path);

            res.end('</body></html>');
        }
    });
});


function base64Image(src) {
    var data = fs.readFileSync(src).toString('base64');
    return util.format('data:%s;base64,%s', mime.lookup(src), data);
}

module.exports = router;
