'use strict';

var app = angular.
  module('sepApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/login', {
          template: '<login></login>'
        })
        .when('/view1', {
          template: '<view1></view1>'
        })
        .when('/customer-service', {
          template: '<customer-service></customer-service>'
        })
        .when('/senior-customer-service', {
          template: '<review-event-requests></review-event-requests>'
        })
        .when('/admin_manager', {
          template: '<event-request-list></event-request-list>'
        })
        .when('/event_requests/new', {
          template: '<new-event-request></new-event-request>'
        })
        .when('/event_requests/:recordNumber', {
          template: '<review-event-requests></review-event-requests>'
        })
        .when('/event_requests', {
          template: '<event-request-list></event-request-list>'
        })
        .when('/production-manager', {
          template: '<production-manager></production-manager>'
        })
        .when('/service-department-manager', {
          template: '<service-department-manager></service-department-manager>'
        })
        .when('/production-staff', {
          template: '<production-staff></production-staff>'
        })
        .when('/service-department-staff', {
          template: '<service-department-staff></service-department-staff>'
        })
        .when('/hr-manager', {
          template: '<hr-manager></hr-manager>'
        })
        .when('/finance-manager', {
          template: '<finance-manager></finance-manager>'
        })
        .otherwise('/login');
    }

  ]);

// The Value Recipe
app.value('DB', {user: "", event_requests: [], login: false});

// initialization
app.controller("SEPController", ['$http', '$rootScope', '$location', '$scope', 'DB',
  function($http, $rootScope, $location, $scope, DB){
    $rootScope.user = null;
    $rootScope.password = "password";

    // add info from http request
    $http.get('data/event_requests.json').then(function(response) {
        DB.event_requests = response.data;
    });

    $http.get('data/employee.json').then(function(response) {
        DB.employee = response.data;
    });

    $http.get('data/recruitment_request.json').then(function(response) {
        DB.recruitment_request = response.data;
    });

    // todo: logout not work
    this.logout = function(){
      $rootScope.user = null;
      console.log("init" + $rootScope.user);
      $location.path("/login")
    }
  }]
)