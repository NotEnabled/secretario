'use strict';
let application = angular.module('application',['ngRoute','ngFileSaver']);

function routeProvConfigFunc($routeProvider) {
    $routeProvider
        .when('/anketa',                {templateUrl:'templates/anketa.html',           controller:'anketaCtrl',            controllerAs:'ctrl'})
        .when('/choose/:searchStr',     {templateUrl:'templates/choose.html',           controller:'chooseCtrl',            controllerAs:'ctrl'})
        .when('/chooseAddSigners',      {templateUrl:'templates/chooseAddSigners.html', controller:'chooseAddSignersCtrl',  controllerAs:'ctrl'})
        .when('/chooseSigner',          {templateUrl:'templates/chooseSigner.html',     controller:'chooseSignerCtrl',      controllerAs:'ctrl'})
        .when('/contactsForm',          {templateUrl:'templates/contactsForm.html',     controller:'contactsFormCtrl',      controllerAs:'ctrl'})
        .when('/contractConditions',    {templateUrl:'templates/contractConditions.html',controller:'contractCondCtrl',     controllerAs:'ctrl'})
        .when('/docsComplete',          {templateUrl:'templates/docsComplete.html',     controller:'docsCompleteCtrl',      controllerAs:'ctrl'})
        .when('/docsEdit',              {templateUrl:'templates/docsEdit.html',         controller:'docsEditCtrl',          controllerAs:'ctrl'})
        .when('/docsPreview',           {templateUrl:'templates/docsPreview.html',      controller:'docsPreviewCtrl',       controllerAs:'ctrl'})
        .when('/docsUpload',            {templateUrl:'templates/docsUpload.html',       controller:'docsUploadCtrl',        controllerAs:'ctrl'})
        .when('/editForm/:inn/:ogrn',   {templateUrl:'templates/editForm.html',         controller:'editFormCtrl',          controllerAs:'ctrl'})
        .when('/editForm',              {templateUrl:'templates/editForm.html',         controller:'editFormCtrl',          controllerAs:'ctrl'})
        .when('/finalForm',             {templateUrl:'templates/finalForm.html',        controller:'finalFormCtrl',         controllerAs:'ctrl'})
        .when('/FirstZpForm',           {templateUrl:'templates/FirstZpForm.html',      controller:'FirstZpFormCtrl',       controllerAs:'ctrl'})
        .when('/isAcOwn',               {templateUrl:'templates/isAcOwn.html',          controller:'isAcOwnCtrl',           controllerAs:'ctrl'})
        .when('/linkForm',              {templateUrl:'templates/linkForm.html',         controller:'linkFormCtrl',          controllerAs:'ctrl'})
        .when('/search',                {templateUrl:'templates/search.html',           controller:'searchCtrl',            controllerAs:'ctrl'})
        .when('/signersAdd',            {templateUrl:'templates/signersAdd.html',       controller:'signersAddCtrl',        controllerAs:'ctrl'})
        .when('/signerSingle',          {templateUrl:'templates/signerSingle.html',     controller:'signerSingleCtrl',      controllerAs:'ctrl'})
        // .otherwise('/contractConditions');
        .otherwise('/search');
}
application.config(['$routeProvider',routeProvConfigFunc]);
