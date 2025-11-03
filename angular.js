// Definimi i aplikacionit te AngularJS
var app = angular.module('myApp' , [])

// Definimi i kontrolluesit
app.controller('MainController', ['$scope', function($scope) {
    $scope.message = "Hello, AngularJS!";
    $scope.greeting = "";

    $scope.sayHello = function(){
        $scope.greeting = "Pershendetje, " + $scope.message + "!";
    }
}]);