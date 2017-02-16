var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var postSchema = new mongoose.Schema({
    content: String,
    up_votes: {type: Number, default: 0},
    down_votes: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    created_at: {type: Date, default: new Date}

});

var Post = mongoose.model('Post', postSchema);