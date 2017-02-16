var path = require("path");
var expr = require('express');
var bp   = require('body-parser');
var port = 8000;

var app = expr();

app.use(bp.json());
app.use(expr.static(path.join(__dirname, 'bower_components')));
app.use(expr.static(path.join(__dirname, 'client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port);