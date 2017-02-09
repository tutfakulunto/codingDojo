// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({extended: true}));

// Tell server where views are and what template engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create pangolin schema and attach it as a model to our database
var PangolinSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name,
// so a Pangolin model in Mongoose looks for "Pangolins" in Mongo
var Pangolin = mongoose.model('Pangolin', PangolinSchema);

// Routes go here!
app.get('/', function(req, res){
    Pangolin.find({}, function(err, results){
        if(err) {console.log(err); }
        res.render('index', {pangolins: results});
    });
});

// Create
app.post('/', function(req, res){
    // Create new pangolin!
    Pangolin.create(req.body, function(err, result){
        if (err) {console.log(err); }
        res.redirect('/')
    });
});

// New
app.get('/new', function(req, res){
    res.render('/new');
});

// Show
app.get('/:id', function(req, res){
    Pangolin.find({ _id: req.params.id } function(err, response){
        if (err) { console.log(err); }
        res.render('show', { pangolin: response[0] });
    });
});

app.get ('/:id/edit/', function(req, res){
    Pangolin.find({ _id: req.params.id }, function(err, response){
        if (err) { console.log(err); }
        res.render('edit', { pangolin: response[0] });
    })
});

app.post('/:id/delete', function(req, res){
    Pangolin.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

app.listen(port, function(){
    console.log("Running on ", port);
})