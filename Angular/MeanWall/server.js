var path = require('path'),
    express = require('express'),
    bp = require('body-parser'),
    port = 8000,
    app = express();

app.use(bp.json());
app.use(express.static(path.join(__dirname, 'bower_components'))),
app.use(express.static(path.join(__dirname, 'client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js');

app.listen(port);