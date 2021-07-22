'use strict';

function contactsFormCtrlFunc($window,$scope) {
    let self = this;
    let step=13;
    $scope.progStyle.stepNO = step;


    self.data={
        tel: null,
        email: null,
        messanger: null,
        time: null
    };
    if ($scope.dataApp.contactsForm != null) {
        self.data = $scope.dataApp.contactsForm;
    }


    self.goBack = function () {
        $window.location.href = '/#!/linkForm';
    };
    self.goNext = function () {
        $scope.dataApp.contactsForm = self.data;
        $window.location.href = '/#!/linkForm';
    };


}

angular.module('application').controller('contactsFormCtrl',['$window','$scope',contactsFormCtrlFunc]);