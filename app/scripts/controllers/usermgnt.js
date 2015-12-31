'use strict';

/**
 * @ngdoc function
 * @name suriApp.controller:UsermgntCtrl
 * @description
 * # UsermgntCtrl
 * Controller of the suriApp
 */
angular.module('suriApp')
    .controller('UsermgntCtrl', function($scope,userService) {
        userService.getAllRes().then(function(response) {
            $scope.data = response.data;
            console.log($scope.data);
        });
    });
