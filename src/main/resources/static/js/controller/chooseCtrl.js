'use strict';

function chooseCtrlFunc($routeParams,$http,$scope,$window) {
    let self = this;
    $scope.progStyle.stepNO = 0;
    $scope.radio = {value: ''};
    self.getListArr = [];

    self.getList= function () {
        $http.get('/api/getList',{params:{searchStr:$routeParams.searchStr}})
            .then(function (resp) {
                self.getListArr = resp.data;
                if (self.getListArr.length == 1) {
                    let item = self.getListArr[0];
                    self.continueProc(item.inn,item.ogrn);
                }
            });
    };
    self.continueProc = function (inn,ogrn) {
        $window.location.href = '/#!/editForm/'+inn+'/'+ogrn;
    };

    self.getList();
}

angular.module('application').controller('chooseCtrl',['$routeParams','$http','$scope','$window',chooseCtrlFunc]);