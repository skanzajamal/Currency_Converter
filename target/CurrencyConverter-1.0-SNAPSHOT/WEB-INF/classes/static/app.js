    var currencyApp = angular.module('currencyApp', ['ngRoute']);

    currencyApp.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/html/currencyConvertion.html",
                controller: "CurrencyCtrl"
            })
            .when("/history", {
                templateUrl: "views/html/conversionHistory.html",
                controller: "CurrencyCtrl"
            })
    }]);
