var express = require('express'),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    port = 8000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port);