'use strict';

function contractCondCtrlFunc($window,$scope) {
    let self = this;
    let step=8;
    $scope.progStyle.stepNO = step;

    self.data = {
        cardTypeMir: false,
        cardTypeOthers: false,
        isACown: null,
        isCommisionDiscussed: null,
        isCardReceiverHolder: false,
        isCardReceiverHolderRepres: false,
        isCardReceiverClientRepres: false,
        isCardReceiverNotknow: false,
        isMoneyReturnHolder: null,
        isMoneyReturnHolderRepres: null,
        isMoneyReturnAssignholder: null,
        isMoneyReturnNotknow: null,
        isGeralTerms: null
    };

    if ($scope.dataApp.contractCond != null) {
        self.data = $scope.dataApp.contractCond;
    }


    self.goBack = function () {
        $window.location.href = '/#!/chooseAddSigners';
    };

    self.goNext = function () {
        $scope.dataApp.contractCond = self.data;
        $window.location.href = '/#!/docsComplete';
    };



}

angular.module('application').controller('contractCondCtrl',['$window','$scope',contractCondCtrlFunc]);