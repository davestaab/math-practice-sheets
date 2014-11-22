'use strict';

/**
 * @ngdoc function
 * @name timesTestsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timesTestsApp
 */
angular.module('timesTestsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
