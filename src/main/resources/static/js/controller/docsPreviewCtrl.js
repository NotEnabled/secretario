'use strict';

function docsPreviewCtrlFunc($window,$scope) {
    let self = this;
    //$scope.progStyle.stepNO = step;

    self.goBack = function () {
        $window.location.href = '/#!/docsComplete';
    };

    self.buttonYES = function () {
        $window.location.href = '/#!/docsUpload';
    };

    self.buttonNO = function () {
        $window.location.href = '/#!/editForm';
    };


}

angular.module('application').controller('docsPreviewCtrl',['$window','$scope',docsPreviewCtrlFunc]);