myApp.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: './static/partials/login.html',
            controller:  'usersController',
        })
        .when('/dashboard', {
            templateUrl: './static/partials/dashboard.html',
            controller: 'usersController'
        })
        .when('/topics/:id', {
            templateUrl: './static/partials/topic.html',
            controller: "topicsController"
        })
        .when('/users/:id', {
            templateUrl: './static/partials/user.html',
            controller: 'usersController'
        })
        .otherwise({
            redirectTo: '/'
        })
});