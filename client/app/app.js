'use strict'

angular.module('radioFreeTwitch')
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
});
