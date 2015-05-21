var express = require('express');
var app = express();
var retrievePosition = require('./lib/positionDaoWithGrouping');

app.get('/v1/parties/:key/positions', retrievePosition);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
