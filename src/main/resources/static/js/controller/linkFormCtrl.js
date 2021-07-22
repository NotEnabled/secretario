'use strict';

function linkFormCtrlFunc($window,$http,FileSaver,$scope) {
    let self = this;
    let step=12;
    $scope.progStyle.stepNO = step;
    self.goBack = function () {
        $window.location.href = '/#!/docsUpload';
    };



    self.leaveContacts = function () {
        $window.location.href = '/#!/contactsForm';
    };

    self.sendDocs = function () {
        $window.location.href = '/#!/finalForm';
    };

    self.downloadDocs = function () {
        $http.post('/api/getDocument',{},{responseType: 'arraybuffer'})
            .then(function (resp) {
                let file = new Blob([resp.data],{type: 'application/vnd.ms-word'});
                FileSaver.saveAs(file,'dogovor.docx');
            });
    }

}

angular.module('application').controller('linkFormCtrl',['$window','$http','FileSaver','$scope',linkFormCtrlFunc]);