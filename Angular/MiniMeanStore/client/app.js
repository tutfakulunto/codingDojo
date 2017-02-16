angular.module('app', ['ngRoute'])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'DC'
            })
            .when('/products', {
                templateUrl: 'views/products.html',
                controller: 'ProductController',
                controllerAs: 'PC'
            })
            .when('/orders', {
                templateUrl: 'views/orders.html',
                controller: 'OrderController',
                controllerAs: 'OC'
            })
            .when('/customers', {
                templateUrl: 'views/customers.html',
                controller: 'CustomerController'
                controllerAs: 'CC'
            })
            .otherwise({
                redirectTo: '/'
            });
    }