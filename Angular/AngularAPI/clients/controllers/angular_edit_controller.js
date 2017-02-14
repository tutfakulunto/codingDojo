app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  /* Public Properties */
  var self = this;

  this.controlValue = "Current Name:";
  /* Public Methods */
  this.getUser = function() {
    userFactory.show(rParams.id, function (user) {
      $scope.user = user;
    })
  }

  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function (userFromFactory){
      $scope.user = userFromFactory;
      // what is this?
      self.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  this.getUser();
  console.log(this);
}]);