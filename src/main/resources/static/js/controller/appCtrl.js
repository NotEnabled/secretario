'use strict';

function appCtrlFunc($scope) {
    let self = this;
    $scope.dataApp = {search: null,
                        editForm: null,
                        anketa: null,
                        signerSingle: null,
                        signersAdd: null,
        contractCond: null,
        contactsForm: null};
    $scope.progStyle = {stepNO: 0, stepsCnt:14,
        get width() {
            return Math.ceil((1-((this.stepsCnt-this.stepNO)/14))*100)+'%';
        }};



}

angular.module('application').controller('appCtrl',['$scope',appCtrlFunc]);