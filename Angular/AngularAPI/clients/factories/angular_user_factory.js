app.factory('userFactory', ['$http', function($http) {
  function UserConstructor() {

    var users = [];

  
    function typeIs(variable, type) {
      return (typeof variable === type);
    }

    this.index = function(cb) {
      if(!typeIs(cb, 'function')) return;

      $http.get('http://{{instructorhost:port}}/users').then(function(data) {
          users = data.data;
          cb(users);
      });
    };
    
    this.create = function(newUser, cb) {
      console.log(newUser);
      if(!typeIs(newUser, 'object') || !typeIs(cb, 'function')) return;

      $http.post('http://{{instructorhost:port}}/users', newUser).then(function(data) {
        console.log('here');
          users.push(data.data);
          cb(users);
      });
    };
    this.update = function(fixedUser, _id, cb) {
      
      $http.put('http://{{instructorhost:port}}/users/' + _id, fixedUser).then(function(data) {
        for (var i = 0; i < users.length; i++) {
          if (users[i]._id === _id) users[i] = fixedUser;
        }
        if (typeIs(cb, 'function')) cb(fixedUser);
      });

    }
    this.show = function(_id, cb) {
      $http.get('http://{{instructorhost:port}}/users/' + _id).then(function(data) {
        if (typeIs(cb, 'function')) cb(data.data);
      });
    }
    this.delete = function(idx, cb) {
      
      if (users[idx]) users.splice(idx, 1);

      if (typeIs(cb, 'function')) cb(users);
    }
  }
  
  return (new UserConstructor());
}]);
