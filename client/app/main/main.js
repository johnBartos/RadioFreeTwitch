(() => 'use strict')();

angular.module('radioFreeTwitch')
  .config(function configMainController($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      });
  });
