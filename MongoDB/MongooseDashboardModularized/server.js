// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000,
    app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({extended: true}));

// Static content
app.use(express.static(path.join(__dirname, "./client/static")));

// Tell server where views are and what template engine I'm using
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// Require the mongoose config file
require('./server/config/mongoose.js');

// Routes go here!
var routes_setter = require('./server/config/routes.js');

// Listen on port 8000
app.listen(8000)