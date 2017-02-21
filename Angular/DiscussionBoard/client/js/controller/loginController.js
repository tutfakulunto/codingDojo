myApp.controller('loginController', function($scope, $cookies, $location, userFactory){

    if ($location.path() == '/') {
        console.log('logged out')
        $scope.currentUser = undefined;
        $cookies.remove('currentUser');
        console.log($scope.currentUser)
    } else {
        $scope.currentUser = $cookies.getObject('currentUser');
        if ($location.path() != '/dashboard') {
            userFactory.index($location.url(), function(data){
                $scope.user = data;
            });
        }
    }

    $scope.login = function(){
        if ($scope.getUser){
            userFactory.create($scope.getUser, function(output){
                $cookies.putObject('currentUser', output);
                // $scope.currentUser = $cookies.getObject('currentUser');
                $scope.getUser = undefined;
                $location.path('/dashboard');
            });
        }
    }

});