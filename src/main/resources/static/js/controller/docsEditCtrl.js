'use strict';

function docsEditCtrlFunc($window,$scope) {
    let self = this;
    let step=1;
    $scope.progStyle.stepNO = 1;



    self.goBackStep = function () {
        $window.location.href = '/#!/';
    };

    self.goNextStep = function () {
        $window.location.href = '/#!/';
    };
}

angular.module('application').controller('docsEditCtrl',['$window','$scope',docsEditCtrlFunc]);