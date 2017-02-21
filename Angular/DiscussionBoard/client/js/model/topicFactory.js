myApp.factory('topicFactory', function($http){

    var factory = {},
        posts = [],
        oneTopic;

    factory.index = function(callback) {
        return $http.get('/topics');
    }

    factory.create = function(info, callback) {
        console.log('create topic factory')
        console.log(info);
        
        return $http.post('/topics', info);
    }

    factory.createPost = function(info, route, callback) {
        $http.post(route + "/post", info).then(function(){
            callback();
        });
    }

    factory.upVote = function(info, callback) {
        $http.post("/topics/post/" + info).then(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.downVote = function(info, callback) {
        $http.post("/topics/down/post/" + info).then(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.show = function(info, callback) {
        $http.get(info).then(function(output){
            oneTopic = output;
            callback(oneTopic);
        });
    }

    factory.delete = function(users, callback) {
        $http.delete('/users/' + users._id).then(function(output){
            users.splice(users.indexOf(users), 1);
            callback(users);
        });
    }


    return factory;
});