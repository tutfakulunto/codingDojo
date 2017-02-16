myApp.factory('userFactory', function($http){

    var factory = {};
    var user = [];
    var currentUser;

    factory.index = function(route, callback) {
        $http.get(route).success(function(output){
            user = output;
            callback(user);
        });
    }

    factory.create = function(info, callback) {
        $http.post('/users', info).success(function(output){
            currentUser=output;
            callback(currentUser);
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