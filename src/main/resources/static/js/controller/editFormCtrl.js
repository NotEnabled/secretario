'use strict';

function editFormCtrlFunc($routeParams, $http, $window,$scope) {
    let self = this;
    let step=1;

    $scope.progStyle.stepNO = step;

    self.data = {
        fullName: null,
        shortName: null,
        urAdress: null,
        factAdress: null,
        regInfo: null,
        signerWithoutDel: null,
        inn: null,
        ogrn: null,
        okpo: null
    };
    if ($scope.dataApp.editForm != null) {
        self.data = $scope.dataApp.editForm;
    }

    self.getContrAgentInfo = function () {
        if(!$routeParams.inn && !$routeParams.ogrn) return;
        $http.get('/api/getContrAgentInfo', {params: {inn: $routeParams.inn,ogrn: $routeParams.ogrn}})
            .then(function (resp) {
                const data = resp.data;
                self.data.fullName = data.fullOrgName;
                self.data.shortName = data.shortOrgName;
                self.data.urAdress = data.ulAdress;
                self.data.factAdress = data.factAdress;
                self.data.regInfo = data.regInfo;
                self.data.signerWithoutDel = data.subjwt;
                self.data.inn = data.inn;
                self.data.ogrn = data.ogrn;
                self.data.okpo = data.okpo;
            });
    };
    self.getContrAgentInfo();

    self.goBackStep = function () {
        $window.location.href = '/#!/search';
    };

    self.goNextStep = function () {
        $scope.dataApp.editForm = self.data;
        $window.location.href = '/#!/isAcOwn';
    };
}

angular.module('application').controller('editFormCtrl',['$routeParams','$http','$window','$scope',editFormCtrlFunc]);