'use strict'

var angular = require('angular');

angular.module('radioFreeTwitch', [
require('angular-resource'),
require('angular-ui-router')
])
  .config( function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }
);
