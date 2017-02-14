var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'), 
    port     = 8000,
    app      = express();

// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

//require mongoose configuration, use path.join to build the route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

//start the server
app.listen(port);