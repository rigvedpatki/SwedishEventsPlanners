'use strict';

angular.
  module('eventRequestList').
  component('eventRequestList', {
    templateUrl: 'event-request-list/event-request-list.template.html',
    controller: ['$http', '$rootScope', '$location', '$window', 'DB',
    	function EventRequestListController($http, $rootScope, $location, $window, DB) {
    		// role check
        // this.user = $rootScope.user;
        $rootScope.user = DB.user;
        this.user = DB.user;
        // test sample
        this.test_sample = "sample";

        if (this.user == "senior_customer_service"){
            this.newMeetingPermission = true;
        } else {
            this.newMeetingPermission = false;
        }

        // this.user = "senior_customer_service";
        // this.user = "financial_manager";
        console.log(this.user);


        // $window.history.back();
        // this.logout = function(){
        //   console.log("logout from customer_service");
        // }

        // this.requests = $rootScope.event_requests;
        this.requests = DB.event_requests;

        this.newForm = function(){
          $location.path("/event_requests/new");
        }

        this.newMeeting = function(){

        }
    }]
  });
