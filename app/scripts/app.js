'use strict';

/**
 * @ngdoc overview
 * @name suriApp
 * @description
 * # suriApp
 *
 * Main module of the application.
 */
angular
  .module('suriApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/usermgnt', {
        templateUrl: 'views/usermgnt.html',
        controller: 'UsermgntCtrl',
        controllerAs: 'usermgnt'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
