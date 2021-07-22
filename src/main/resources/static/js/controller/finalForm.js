'use strict';

function finalFormFunc($window,$scope) {
    let self = this;
    let step=14;
    $scope.progStyle.stepNO = step;
    self.goBack = function () {
        $window.location.href = '/#!/linkForm';
    };
    self.goStart = function () {
        $window.location.href = '/#!/search';
    }
    self.goMain = function () {
        $window.location.href = 'https://gazprombank.ru';
    }

}

angular.module('application').controller('finalFormCtrl',['$window','$scope',finalFormFunc]);