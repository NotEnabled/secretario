'use strict';

function chooseAddSignersCtrlFunc($window,$scope) {
    let self = this;
    let step=6;
    $scope.progStyle.stepNO = step;
    self.goBack = function () {
        $window.location.href = '/#!/chooseSigner';
    };

    self.goNext = function () {
        $window.location.href = '/#!/contractConditions';
    };

    self.addButton = function () {
        $window.location.href = '/#!/signersAdd';
    };

}

angular.module('application').controller('chooseAddSignersCtrl',['$window','$scope',chooseAddSignersCtrlFunc]);