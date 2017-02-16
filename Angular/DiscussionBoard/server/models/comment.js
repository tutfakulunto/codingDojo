var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commentSchema = new mongoose.Schema({
    content: String,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    created_at: {type: Date, default: new Date}

});

var Comment = mongoose.model('Comment', commentSchema);