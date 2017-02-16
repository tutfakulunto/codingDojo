var users = require('../controllers/users.js'),
    messages = require('../controllers/messages.js');

module.exports = function(app){
    app.post('/login', users.login);
    app.post('/register', user.register);
    app.get('/allMessages', messages.getMessages);
    app.post('/postMessage', messages.postMessage);
    app.post('/postComment', messages.postComment);
};