var express = require('express');
var router = express.Router();
var path = require("path");
var qs = require('querystring');
var emailSender = require('./nodeSendEmail');
var insertData = require('./nodeInsertMongo');
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

router.post('/contactFormData', function (req, res) {
  console.log('Contact form post request recieved!');
  var contactFormRaw = JSON.parse(JSON.stringify(req.body));
  var formUserName, formUserEmail, formUserComment;
  var nodeQuoteFormData ={};
  nodeQuoteFormData.Source = "ContactModal";
  nodeQuoteFormData.userName = contactFormRaw.Name || "";
  nodeQuoteFormData.usrEmail = contactFormRaw.Email || "";
  nodeQuoteFormData.Comment = contactFormRaw.Comment || "";
  var nodeSendEmailBody = "<table style="+"'border: 1px solid #990000; border-collapse: collapse; background-color: #f4511e; width: 100%'"+
  "<tr>"+
    "<th>Form Item</th>"+
    "<th>Value</th>"+
  "</tr>"+
  "<tr>"+
  "<td>Customer Name</td>"+
  "<td>"+nodeQuoteFormData.userName+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Email</td>"+
  "<td>"+nodeQuoteFormData.usrEmail+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Comment</td>"+
  "<td>"+nodeQuoteFormData.Comment+"</td>"  +
  "</tr>"+
"</table>";
  emailSender.sendNodeEmail(nodeSendEmailBody);
  insertData.insertDataIntoMongo(nodeQuoteFormData);
  res.send({"Result" : "OK"});

});
router.post('/modalUserQuotation', function (req, res) {
  console.log('Quote Modal Post request recieved!');
  var un, up;
  console.log('body: ' + JSON.stringify(req.body));
  un = JSON.parse(JSON.stringify(req.body));
  var nodeQuoteFormData ={};
  nodeQuoteFormData.Source = "QuoteModal";
  nodeQuoteFormData.userName = un.usrName  || "";
  nodeQuoteFormData.userMobile= un.usrMobile  || "";
  nodeQuoteFormData.userEmail = un.usrEmail || "";
  nodeQuoteFormData.userLocationFrom = un.usrLocationFrom || "";
  nodeQuoteFormData.userLocationTo = un.usrLocationTo || "";
  var msgHTMLBODY = "<table style="+"'border: 1px solid #990000; border-collapse: collapse; background-color: #f4511e; width: 100%'"+
  "<tr>"+
    "<th>Form Item</th>"+
    "<th>Value</th>"+
  "</tr>"+
  "<tr>"+
  "<td>Customer Name</td>"+
  "<td>"+nodeQuoteFormData.userName+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Mobile</td>"+
  "<td>"+nodeQuoteFormData.userMobile+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>Email</td>"+
  "<td>"+nodeQuoteFormData.userEmail+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>From Location</td>"+
  "<td>"+nodeQuoteFormData.userLocationFrom+"</td>"  +
  "</tr>"+
  "<tr>"+
  "<td>To Location</td>" +
  "<td>"+nodeQuoteFormData.userLocationTo+"</td>"  +
  "</tr>"+
"</table>";
//  let msgBody = "User Name: "+userName+"\n\nUser Mobile: "+userMobile+"\n\nUser Email:"+userEmail+"\n\nLocation From:  "+userLocationFrom+"\n\nLocationTo: "+userLocationTo;

  //emailSender.sendNodeEmail(msgHTMLBODY);
  insertData.insertDataIntoMongo(nodeQuoteFormData);
  res.send({"Result" : "OK"});
});

module.exports = router;
