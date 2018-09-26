var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var router = require('./controllers/burger_controller.js');
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

app.listen(port);