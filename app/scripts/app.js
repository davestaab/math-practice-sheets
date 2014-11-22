'use strict';

/**
 * @ngdoc overview
 * @name timesTestsApp
 * @description
 * # timesTestsApp
 *
 * Main module of the application.
 */
angular
  .module('timesTestsApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
