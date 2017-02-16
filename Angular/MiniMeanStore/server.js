var path = require('path'),
    bp = require('body-parser'),
    express = require('express'),
    port = 8000,
    app = express();

app.use(bp.json());
app.use(expr.static(path.join(__dirname, 'bower_components')));
app.use(expr.static(path.join(__dirname, 'client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port);