'use strict';

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(_o){ //v1.0
  var o = angular.copy(_o);
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
  return o;
}

/**
 * @ngdoc function
 * @name timesTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timesTestsApp
 */
angular.module('timesTestsApp')
  .controller('MainCtrl', function ($scope) {

    var numbers = [];
    $scope.multiplier = 5;
    $scope.sets = 4;
    $scope.range = 12;
    $scope.groups = [];


    $scope.reload = function() {
      numbers.length = 0; // clear the list
      for(var i = 0; i <= $scope.range; i++) {
        numbers.push(i);
      }
      $scope.groups.length = 0;
      for(var j = 0; j < $scope.sets; j++) {
        $scope.groups.push(shuffle(numbers));
      }
    };

    $scope.reload(); // first time setup

  });



