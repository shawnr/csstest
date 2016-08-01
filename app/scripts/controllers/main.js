'use strict';

/**
 * @ngdoc function
 * @name csstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the csstestApp
 */
angular.module('csstestApp')
  .controller('MainCtrl', function ($scope, hotness) {
    $scope.hotness = hotness.query();
  });
