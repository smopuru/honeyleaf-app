'use strict';

/**
 * @ngdoc service
 * @name suriApp.userService
 * @description
 * # userService
 * Service in the suriApp.
 */


function userService($http) {
    var url = 'http://api.swiggy.in/api/v2/restaurants?lat=19.1350852&lng=72.81461009999998';
    var service = {};

    function getAllRes() {
        // return $http.get(url + 'manufacturer/forUIData').then(handleSuccess, handleError('Error getting pre user data'));
        return $http.get(url).then(handleSuccess, handleError);
    }

    function handleSuccess(res) {
    	console.log(res.data);
        return res.data;
    }

    function handleError(error) {
        return function() {
            return {
                success: false,
                message: error
            };
        };
    }

    service.getAllRes = getAllRes;

    return service;
}
angular.module('suriApp').service('userService', userService);
