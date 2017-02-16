myApp.factory('topicFactory', function($http){

    var factory = {};
    var topics = [];
    var posts = []
    var oneTopic;

    factory.index = function(callback) {
        $http.get('/topics').success(function(output){
            topics = output;
            callback(topics);
        });
    }

    factory.create = function(info, callback) {
        console.log('create topic factory')
        console.log(info);
        $http.post('/topics', info).success(function(output){
            topics.push(output);
            callback(topics)
        });
    }

    factory.createPost = function(info, route, callback) {
        $http.post(route+"/post", info).success(function(){
            callback();
        });
    }

    factory.createComment = function(info, callback) {
        $http.post('/topics/comment', info).success(function(){
            callback();
        });
    }

    factory.upVote = function(info, callback) {
        $http.post("/topics/post/"+info).success(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.downVote = function(info, callback) {
        $http.post("/topics/down/post/"+info).success(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.show = function(info, callback) {
        $http.get(info).success(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.delete = function(users, callback) {
        $http.delete('/users/'+users._id).success(function(output){
            users.splice(users.indexOf(users), 1);
            callback(users);
        });
    }


    return factory;
});