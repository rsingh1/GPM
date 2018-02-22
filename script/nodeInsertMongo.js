exports.insertDataIntoMongo = function(nodeQuoteFormData)
{
  var MongoClient = require('mongodb').MongoClient;
  var mongoose  = require('mongoose');
  var config = {
        "USER"    : "admin",
        "PASS"    : "password",
        "HOST"    : "ec2-52-70-98-25.compute-1.amazonaws.com",
        "PORT"    : "27017",
        "DATABASE" : "GPMUserDetails"
      };
  var dbPath  = "mongodb://"+config.USER + ":"+
    config.PASS + "@"+
    config.HOST + ":"+
    config.PORT + "/"+
    config.DATABASE;

MongoClient.connect(dbPath, function(err, db) {
  if (err) throw err;
  var dbo = db.db("GPMUserDetails");
  var myobj;
  if(nodeQuoteFormData.Source && nodeQuoteFormData.Source ==="QuoteModal") {
    myobj = { Name: nodeQuoteFormData.userName, Mobile:nodeQuoteFormData.userMobile,Email: nodeQuoteFormData.usrEmail, LocationFrom: nodeQuoteFormData.usrLocationFrom ,LocationTo: nodeQuoteFormData.usrLocationTo };
    dbo.collection("GPMQuotes").insertOne(myobj, function(err, res) {
      if (err){
        throw err;
      }
      else {
        console.log("Quote Data from Modal inserted");
      }
      db.close();
    });
  }
  else if(nodeQuoteFormData.Source && nodeQuoteFormData.Source ==="ContactModal"){
    myobj = { Name: nodeQuoteFormData.userName, Email: nodeQuoteFormData.usrEmail, UserComment: nodeQuoteFormData.Comment };
    dbo.collection("GPMQuotes").insertOne(myobj, function(err, res) {
      if (err){
        throw err;
      }
      else {
        console.log("Contact Data from Modal inserted");
      }
      db.close();
    });
  }
});
};
