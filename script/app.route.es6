angular.module('app')

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '@': {
          templateUrl: 'script/home/home.html',
          controller: 'HomeCtrl as hmCtrl'
        }
      }
    })
})
