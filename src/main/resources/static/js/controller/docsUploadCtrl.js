'use strict';

function docsUploadCtrlFunc($window,$scope) {
    let self = this;
    let step=11;
    $scope.progStyle.stepNO = step;
    self.goBackStep = function () {
        $window.location.href = '/#!/docsComplete';
    };

    self.goNextStep = function () {
        $window.location.href = '/#!/linkForm';
    };

    self.uploadDocs = function () {
        alert("загрузка файлов");
    };

}

angular.module('application').controller('docsUploadCtrl',['$window','$scope',docsUploadCtrlFunc]);