'use strict';

function signersAddCtrlFunc($window,$scope) {
    let self = this;
    let step=7;
    $scope.progStyle.stepNO = step;

    class Signer{
        constructor() {
            this.fio = null;
            this.doveren = null;
            this.doverenDate = null;
        }
    }

    self.data = {signersArr: [new Signer()]};

    if ($scope.dataApp.signersAdd != null) {
        self.data = $scope.dataApp.signersAdd;
    }

    self.goBack = function () {
        $window.location.href = '/#!/chooseAddSigners';
    };

    self.goNext = function () {
        $scope.dataApp.signersAdd = self.data;
        $window.location.href = '/#!/contractConditions';
    };

    self.buttonAdd = function () {
        self.data.signersArr[self.data.signersArr.length] = new Signer();
    };

    self.delItem = function (item) {
        const idx = self.data.signersArr.indexOf(item);
        self.data.signersArr.splice(idx,1)
    };

}

angular.module('application').controller('signersAddCtrl',['$window','$scope',signersAddCtrlFunc]);