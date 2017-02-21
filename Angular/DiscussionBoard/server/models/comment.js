var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commentSchema = new mongoose.Schema({
    content: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    created_at: {type: Date, required: true, default: new Date}

});

var Comment = mongoose.model('Comment', commentSchema);