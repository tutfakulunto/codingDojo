myApp.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: './static/partials/login.html',
            controller:  'loginController'
        })
        .when('/dashboard', {
            templateUrl: './static/partials/dashboard.html',
            controller: 'dashboardController',
            resolve: {
                topics: function(topicFactory){
                    return topicFactory.index();
                }
            }
        })
        .when('/topic/:id', {
            templateUrl: './static/partials/topic.html',
            controller: 'topicsController'
        })
        .when('/users/:id', {
            templateUrl: './static/partials/user.html',
            controller: 'userController'
        })
        .otherwise({
            redirectTo: '/'
        });
});