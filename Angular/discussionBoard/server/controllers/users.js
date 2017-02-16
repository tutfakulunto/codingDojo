var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {

    index: function(req, res) {
        console.log('index controller')
        User.find({}, function(err, users){
            console.log(users);
            res.json(users);
        });
    },

    create: function(req, res) {
        var user = new User(req.body);
        User.findOne({name: user.name}, function(err, result){
            console.log(result);
            if (result !== null){
                console.log('duplicate user')
                res.json(result)
            } else{
                console.log('new user');
                user.save(function(err) {
                if (err) {
                    res.json({errors: user.errors});
                } else {
                    res.json(user);
                }
                });
            }
        });
    },

    showUser: function(req, res) {
        console.log(req.params.id);
        User.findOne({_id: req.params.id}, function(err, user){
            if (err) {
                console.log("can't find user");
            } else {
                res.json(user);
            }
        });
    },

    delete: function(req, res) {
        var query = {_id: req.params.id};
        User.remove(query, function(err){
            if (err) {
                res.json(err);
            } else {
                res.json({status: true});
            }
        });
    }
}