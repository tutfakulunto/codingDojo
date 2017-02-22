var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var topicSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: {type: String, ["SQL", "Python", "Javascript", "R", "Swift"]},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    created_at: {type: Date, default: new Date}
});

var Topic = mongoose.model('Topic', topicSchema);