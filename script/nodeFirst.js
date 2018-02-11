var http = require('http'), queryString = require('querystring'), util = require('util');;
var sendNEmail = require('./nodeSendEmail');
var url = require('url');

http.createServer(function (req, res) {

    //console.log('Request received: ');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query, obj;
    
    //console.log('Query string params');
    sendNEmail.sendNodeEmail(JSON.stringify(query));
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    console.log('GOT DATA!');
    //res.write( util.inspect( url_parts.query ) );
    res.end('callback(\'{\"msg\": \"OK\"}\')');

}).listen(8080);
console.log('Server running on port 8080');
