'use strict';

function chooseSignerCtrlFunc($window,$scope) {
    let self = this;
    let step=4;
    $scope.progStyle.stepNO = step;
    self.goBack = function () {
        $window.location.href = '/#!/isAcOwn';
    };

    self.button1 = function () {
        $window.location.href = '/#!/chooseAddSigners';
    };
    self.button2 = function () {
        $window.location.href = '/#!/signerSingle';
    };

}

angular.module('application').controller('chooseSignerCtrl',['$window','$scope',chooseSignerCtrlFunc]);