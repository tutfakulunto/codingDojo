var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var route = require("./routes/index.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});