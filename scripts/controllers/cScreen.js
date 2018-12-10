'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:CScreen
 * @description
 * # CScreen
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('CScreen', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.close = function () {
                return $mdDialog.hide();
            };
        }
    ])
;



