var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
    name: String,
    topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    created_at: {type: Date, default: new Date}

});

var User = mongoose.model('User', userSchema);