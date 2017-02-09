// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

var Quote = mongoose.model('quotes', QuoteSchema);

// Views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res){
  res.render('welcome');
});

app.get('/quotes', function(req, res){
  Quote.find({}, function(err, results){
    if(err) { console.log(err); }
    res.render('quotes', { quotes: results });
  });
});

app.post('/quotes', function(req, res){
  Quote.create(req.body, function(err){
    if(err) { console.log(err); }
    res.redirect('/quotes');
  });
});

app.listen(port);