'use strict';

function searchCtrlFunc($window,$scope) {
    let self = this;
    let step = 0;
    $scope.progStyle.stepNO= 0;
    self.data={searchStr: null, region: null};
    if ($scope.dataApp.search != null) {
        self.data = $scope.dataApp.search;
    }

    self.regionList = [
        'Восточно-Сибирский',
        'Дальневосточный',
        'Западно-Сибирский',
        'Западно-Уральский',
        'Казань',
        'Калининград',
        'Кемерово',
        'Москва',
        'Новый Уренгой',
        'Поволжский',
        'Приволжский',
        'Северо-Западный',
        'Северо-Кавказкий',
        'Северо-Среднерусский',
        'Сургут',
        'Томск',
        'Уральский',
        'Уфа',
        'Центрально-Черноземный',
        'Центральный',
        'Южный'
    ];
    self.runSearch = function (str) {
        $scope.dataApp.search=self.data;
        $window.location.href = '/#!/choose/'+self.data.searchStr;
    }

}

angular.module('application').controller('searchCtrl',['$window','$scope',searchCtrlFunc]);