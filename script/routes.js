var express = require('express');
var router = express.Router();
var path = require("path");
var qs = require('querystring');
var emailSender = require('./nodeSendEmail');
router.get('/', function(req, res){
  res.sendFile('Index.html', { root: '.' });
});
router.get('/script/home.js', function(req, res, next) {
        res.sendFile('home.js', { root: 'script' });
});
router.get('/css/style.css', function(req, res, next) {
        res.sendFile('style.css', { root: 'css' });
});
router.get('/images/longDistanceMove.png', function(req, res, next) {
        res.sendFile('longDistanceMove.png', { root: 'images' });
});
router.get('/images/packing_1.png', function(req, res, next) {
        res.sendFile('packing_1.png', { root: 'images' });
});
router.get('/images/laborOnly.png', function(req, res, next) {
        res.sendFile('laborOnly.png', { root: 'images' });
});

router.get('/images/vehicleShift.png', function(req, res, next) {
        res.sendFile('vehicleShift.png', { root: 'images' });
});
router.get('/images/hireTruck.png', function(req, res, next) {
        res.sendFile('hireTruck.png', { root: 'images' });
});
router.get('/images/storage.png', function(req, res, next) {
        res.sendFile('storage.png', { root: 'images' });
});
router.get('/images/finallogo1.png', function(req, res, next) {
        res.sendFile('finallogo1.png', { root: 'images' });
});
router.get('/images/logo.png', function(req, res, next) {
        res.sendFile('logo.png', { root: 'images' });
});
router.post('/', function (req, res) {
  console.log('Post request recieved!');
  var un, up;
  console.log('body: ' + JSON.stringify(req.body));
  un = JSON.parse(JSON.stringify(req.body));
  var userName, userMobile, userEmail, userLocationFrom, userLocationTo;
  userName = un.usrName  || "";
  userMobile= un.usrMobile  || "";
  userEmail = un.usrEmail || "";
  userLocationFrom = un.usrLocationFrom || "";
  userLocationTo = un.usrLocationTo || "";
  var msgHTMLBODY = "<table style="+"'border: 1px solid #990000; border-collapse: collapse; background-color: #f1f1c1; width: 100%'"+
  "<tr>"+
    "<th>Form Item</th>"+
    "<th>Value</th>"+
  "</tr>"+
  "<tr>"+
  "<td>Customer Name</td>"+
  "<td>"+userName+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Mobile</td>"+
  "<td>"+userMobile+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Email</td>"+
  "<td>"+userEmail+"</td>"  +
  "<tr>"+
  "<td>From Location</td>"+
  "<td>"+userLocationFrom+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>To Location</td>" +
  "<td>"+userLocationTo+"</td>"  +
  "</tr>"+
"</table>";
//  let msgBody = "User Name: "+userName+"\n\nUser Mobile: "+userMobile+"\n\nUser Email:"+userEmail+"\n\nLocation From:  "+userLocationFrom+"\n\nLocationTo: "+userLocationTo;

  emailSender.sendNodeEmail(msgHTMLBODY);
  res.send({"Result" : "OK"});
})

module.exports = router;
