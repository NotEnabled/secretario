'use strict';

function anketaCtrlFunc($window,$scope) {
    let self = this;
    let step=3;
    $scope.progStyle.stepNO = step;

    self.data= {
        isEdu: null,
        orgTerm: null,
        orgPeopleCnt: null,
        orgType: null,
        tel: null,
        otherContacts: null,
        zpModuleAdress: null,
        isLastChangeDocs: null,
        isFZ223: null,
        isFZ44: null,
        isKazah: null,
        isSH: null,
        isResidentRF: null,
        isFINorg: null,
        orgBalanceMost: null,
        isUSResContain: null,
        isResidentQuest: null
    };
    if ($scope.dataApp.anketa != null) {
        self.data = $scope.dataApp.anketa;
    }


    self.goBack = function () {
        $window.location.href = '/#!/isAcOwn';
    };

    self.goNext = function () {
        $scope.dataApp.anketa = self.data;
        $window.location.href = '/#!/chooseSigner';
    };



}

angular.module('application').controller('anketaCtrl',['$window','$scope',anketaCtrlFunc]);