'use strict';

function signerSingleCtrlFunc($window,$scope) {
    let self = this;
    let step=5;
    $scope.progStyle.stepNO = step;

    self.data= {fio: null,doveren: null,doverenDate: null};

    if ($scope.dataApp.signerSingle != null) {
        self.data = $scope.dataApp.signerSingle;
    }

    self.goBack = function () {
        $window.location.href = '/#!/chooseSigner';
    };

    self.goNext = function () {
        $scope.dataApp.signerSingle = self.data;
        $window.location.href = '/#!/chooseAddSigners';
    };



}

angular.module('application').controller('signerSingleCtrl',['$window','$scope',signerSingleCtrlFunc]);