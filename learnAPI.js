// var gcloud = require('gcloud')({
//     keyFilename: 'Group4-d1991f17d2b7.json',
//     projectId: 'group4-168406'
// });
// var vision = gcloud.vision();
//
// var image = 'image.jpg';
//
// vision.detectText('./image.jpg', function(err, text, apiResponse) {
//     // text = ['This was text found in the image']
// });


var fs = require('fs');
var filename = 'Group4-d1991f17d2b7.json';
fs.readFile('Group4-d1991f17d2b7.json'), 'utf8', function (err, data) {
    if(err){
      console.log(err);
    }
    console.log(filename)
    console.log(data);


}
console.log("what the fuck");