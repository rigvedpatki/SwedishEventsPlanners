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
    // this.login = DB.login;
    // this.login = true;
    $scope.login = DB.login;
    // read DB
    console.log(DB);

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

    console.log(DB);

    // });
    $rootScope.event_requests = [{
  clientName: "College of Music",
  eventType: "Workshop",
  expectedBudget: "10000",
  fromDate: "2016/10/17",
  toDate: "2016/10/19",
  numberOfAttendees: "40",
  preferences: {
    decorations: true,
    drinks: true,
    meals: true,
    parties: true,
    photos: true
  },
  recordNumber: "010003",
  reviewer: "senior_customer_service"
},
{
  clientName: "Mark Otto",
  eventType: "workshop",
  expectedBudget: "10000",
  fromDate: "2016/10/17",
  toDate: "2016/10/19",
  numberOfAttendees: "40",
  preferences: {
    decorations: true,
    drinks: true,
    meals: true,
    parties: true,
    photos: true
  },
  recordNumber: "010005",
  reviewer: "financial_manager"
},
{
  clientName: "Mark Otto",
  eventType: "workshop",
  expectedBudget: "10000",
  fromDate: "2016/10/17",
  toDate: "2016/10/19",
  numberOfAttendees: "40",
  preferences: {
    decorations: true,
    drinks: true,
    meals: true,
    parties: true,
    photos: true
  },
  recordNumber: "010010",
  reviewer: "production_manager"
}
];
    // todo: logout not work
    this.logout = function(){
      $rootScope.user = null;
      console.log("init" + $rootScope.user);
      $location.path("/login")
    }
  }]
)
