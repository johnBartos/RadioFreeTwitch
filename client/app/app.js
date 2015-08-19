'use strict'

angular.module('radioFreeTwitch', [
'ngResource',
'ui.router'
])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }
);
