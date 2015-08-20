angular.module('radioFreeTwitch')
  .config( function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main.html',
        controller: 'MainController'
      });
  });
