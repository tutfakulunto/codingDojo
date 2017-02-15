var mongoose = require('mongoose')
var Person = mongoose.model('Person');

module.exports = {
    index: function(req, res){
    Person.find({}, function(err, people){
        if (err){
          res.json(err)
        }else{
          res.json(people);
        }
      })
    },

    create: function(req, res){
        console.log('this is data posted: ',req.params);
        var person = new Person({
            name: req.params.name,
        });
        person.save(function(err){
            if (err){
              console.log('error occurred! beep beep');
              res.json('index', {err: err});
            }else{
              res.redirect('/');
            }
        })
    },
    
    destroy: function(req, res){
        Person.findOneAndRemove({name: req.params.name}, function(err){
          if (err){
              res.json(err);
          }else{
              res.redirect('/')
          }
        })
    },

    show: function(req, res){
        Person.findOne({name: req.params.name}, function(err, person){
          if (err){
            res.json(err);
          }else{
            res.json('index', {person : person})
          }
        })
      }
    }