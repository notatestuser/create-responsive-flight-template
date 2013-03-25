/**
 * Module dependencies.
 */

var express = require('express')
    , http = require('http')
    , path = require('path');

var app = express();

var webRoot = 'www';
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/' + webRoot }));
    app.use(express.static(path.join(__dirname, webRoot)));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', function (req, res) {
    res.sendfile(webRoot + "/index.html");
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Server listening on port " + app.get('port'));
});
