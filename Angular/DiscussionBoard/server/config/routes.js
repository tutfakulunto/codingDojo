var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
// require any other controllers here

module.exports = function(app) {
    /**
     * Get a list of users.
     */
    app.get('/users', function(req, res) {
        users.index(req, res);
    });

    /**
     * Get a specific user.
     */
    app.get('/users/:id', function(req, res){
        users.showUser(req, res);
    })

    /**
     * Create a new user.
     */
    app.post('/users', function(req, res){
        users.create(req, res);
    });

    /**
     * Delete an existing user.
     */
    app.delete('/users/:id', function(req, res){
        users.delete(req, res);
    });

    /**
     * Get a list of topics.
     */
    app.get('/topics', function(req, res){
        topics.index(req, res);
    });

    /**
     * Create a new topic.
     */
    app.post('/topics', function(req, res){
        topics.create(req, res);
    });

    /**
     * Get a specific topic.
     */
    app.get('/topics/:id', function(req, res){
        topics.show(req, res);
    });

    /**
     * Creates a new post.
     */
    app.post('/topics/:id/post', function(req, res){
        topics.createPost(req, res);
    });

    /**
     * Upvote an existing post.
     */
    app.post('/posts/:post_id/upvote', function(req, res){
        topics.upVote(req, res);
    });

    /**
     * Downvote an existing post.
     */
    app.post('/posts/:id/downvote', function(req, res){
        console.log('routes')
        topics.downVote(req, res);
    });

    /**
     * Create a new comment for a post.
     */
    app.post('/posts/:id/comments', function(req, res){
        console.log('routes');
        topics.createComment(req, res);
    });

}