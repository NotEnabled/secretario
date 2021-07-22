'use strict';

function isAcOwnCtrlFunc($window,$scope) {
    let self = this;
    let step=2;
    $scope.progStyle.stepNO = step;

    self.goBackStep = function () {
        $window.location.href = '/#!/editForm';
    };

    self.NoButton = function () {
        $window.location.href = '/#!/anketa';
    };

    self.YesButton = function () {
        $window.location.href = '/#!/chooseSigner';
    };

}

angular.module('application').controller('isAcOwnCtrl',['$window','$scope',isAcOwnCtrlFunc]);