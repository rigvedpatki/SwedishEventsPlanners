'use strict';

angular.
  module('customerService').
  component('customerService', {
    templateUrl: 'customer-service/customer-service.template.html',
    controller: ['$http', '$rootScope', '$location', '$window',
    	function CustomerServiceController($http, $rootScope, $location, $window) {
    		// role check
        if($rootScope.user != "customer_service"){
    			console.log($rootScope.user);
    			alert("You are not allowed to be here!")
    			$window.history.back();
    		}
        else{
          console.log("customer_service accesses successfully.")
        }

        // this.logout = function(){
        //   console.log("logout from customer_service");
        // }

        var self = this;
        $http.get('data/requests.json').then(function(response) {
          self.requests = response.data;
        });

        this.newForm = function(){
          $location.path("/event_requests/new");
        }
    }]
  });