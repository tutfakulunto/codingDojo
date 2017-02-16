angular.module('app', ['ngRoute', 'ngCookies'])
    .config(config);

function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController',
            controllerAs: 'IC'
        })
        .when('/messages', {
            templateUrl: 'views/wall.html',
            controller: 'WallController',
            controllerAs: 'WC'
        })
        .otherwise({
            redirectTo: '/'
        });
}