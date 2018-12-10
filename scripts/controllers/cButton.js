'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:CButton
 * @description
 * # CButton
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('CButton', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.onClickC = function () {
                return $mdDialog.show({
                    templateUrl: '../App.C/views/cScreen.html',
                    controller: 'CScreen',
                });
            };
        }
    ])
;



