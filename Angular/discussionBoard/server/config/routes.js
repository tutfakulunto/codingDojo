var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
// require any other controllers here

module.exports = function(app) {

    app.get('/users', function(req, res) {
        users.index(req, res);
    });

    app.get('/users/:id', function(req, res){
        users.showUser(req, res);
    })

    app.post('/users', function(req, res){
        users.create(req, res);
    });

    app.delete('/users/:id', function(req, res){
        users.delete(req, res);
    });

    app.get('/topics', function(req, res){
        topics.index(req, res);
    });

    app.post('/topics', function(req, res){
        topics.create(req, res);
    });

    app.get('/topics/:id', function(req, res){
        topics.show(req, res);
    });

    app.post('/topics/:id/post', function(req, res){
        topics.createPost(req, res);
    });

    app.post('/topics/post/:post_id', function(req, res){
        console.log('routes')
        topics.upVote(req, res);
    });

    app.post('/topics/down/post/:post_id', function(req, res){
        console.log('routes')
        topics.downVote(req, res);
    });

    app.post('/topics/comment', function(req, res){
        console.log('routes');
        topics.createComment(req, res);
    });

}