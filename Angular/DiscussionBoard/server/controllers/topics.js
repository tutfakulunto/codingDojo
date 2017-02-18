var mongoose = require('mongoose'),
    Topic = mongoose.model('Topic'),
    User = mongoose.model('User'),
    Post = mongoose.model('Post'),
    Comment = mongoose.model('Comment');


module.exports = {

    index: function(req, res) {
        console.log('showAll controller')
        Topic.find({}).populate('_user')
        .exec(function(err, topics){
            console.log(topics);
            res.json(topics);
        });
    },

    create: function(req, res) {
        console.log(req.body)
        User.findOne({_id: req.body._user}, function(err, user){
            var topic = new Topic(req.body);
            user.topics.push(topic);
            user.save(function(err){
                topic.save(function(err){
                    if (err){
                        console.log(err)
                    } else {
                        console.log('saved topic')
                        res.json(topic)
                    }
                });
            });
        });
    },

    upVote: function(req, res) {
        console.log(req.params.post_id);
        Post.findByIdAndUpdate(req.params.post_id, {$inc: {up_votes: 1}}, function(err, post){
            if (err){
                console.log(err);
            } else {
                res.end();
            }
        });

    },

    downVote: function(req, res) {
        // console.log(req.params.post_id);
        Post.findByIdAndUpdate(req.params.post_id, {$inc: {down_votes: 1}}, function(err, post){
            if (err){
                console.log(err);
            } else {
                res.end();
            }
        });

    },

    createComment: function(req, res) {
        var comment = new Comment(req.body);
        comment.save(function(err){
            if (err) {
                console.log('error saving comment');
            } else {
                User.findByIdAndUpdate(comment._user, {$push: {'comments': comment}}, function(err){

                });
                Post.findByIdAndUpdate(comment._post, {$push: {'comments': comment}}, function(err){

                });
                res.end();
            }
        });
    },

    createPost: function(req, res) {
        req.body._topic = req.params.id;
        var post = new Post(req.body);
        post.save(function(err){
            if (err){
                console.log('error saving post')
            } else {
                User.findByIdAndUpdate(req.body._user, {$push: {'posts': post}}, function(err){
                });
                Topic.findByIdAndUpdate(req.body._topic, {$push: {'posts': post}}, function(err){
                });
                res.end();
                
            }
        });
    },

    show: function(req, res) {
        Topic.findOne({_id: req.params.id})
        .populate('_user').populate({path:'posts', populate: {path:'_user', model:'User'}}).populate({path:'posts', populate: {path: 'comments', model:'Comment', populate:{path:'_user', model: 'User'}}})
        .exec(function(err, result){
            console.log(result);
            res.json(result);
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