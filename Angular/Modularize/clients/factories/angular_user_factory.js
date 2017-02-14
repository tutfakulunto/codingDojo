app.factory('userFactory', [function() {
    function UserConstructor() {

    var users = [];

    function typeIs(variable, type) {
      return (typeof variable === type);
    }

    this.index = function(cb) {
      if(!typeIs(cb, 'function')) return;

      cb(users);
    };
    
    this.create = function(newUser, cb) {
      if(typeIs(newUser, 'object')) users.push(newUser);

      if(typeIs(cb, 'function')) cb(users);
    };
   
    this.update = function(updateUser, idx, cb) {
     
      if (users[idx]) {
        for (var key in updateUser) {
          users[idx][key] = updateUser[key];
        }
      }
      if (typeIs(cb, 'function')) cb(users[idx]);
    }
    this.show = function(idx, cb) {
      if (typeIs(cb, 'function')) cb(users[idx]);
    }
    this.delete = function(idx, cb) {
      if (users[idx]) {
        users.splice(idx, 1);
      }
      if (typeIs(cb, 'function')) cb(users);
    }
  }

  return (new UserConstructor());
}]);