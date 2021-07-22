'use strict';

function docsCompleteCtrlFunc($window,$scope) {
    let self = this;
    let step=9;
    $scope.progStyle.stepNO = step;
    self.goBack = function () {
        $window.location.href = '/#!/chooseAddSigners';
    };


    self.toReview = function () {
        alert("Загрузка файла");
        //$window.location.href = '/#!/docsPreview';
    };

    self.buttonYes = function () {
        $window.location.href = '/#!/docsUpload';
    };

    self.buttonNO = function () {
        $window.location.href = '/#!/docsEdit';
    };

}

angular.module('application').controller('docsCompleteCtrl',['$window','$scope',docsCompleteCtrlFunc]);