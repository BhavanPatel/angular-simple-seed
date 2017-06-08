'use strict';
angular.module('app.routes', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './components/home/home.html',
        controller: 'homeController'
      })
      .state('about', {
        url: '/about',
        templateUrl: './components/about/about.html',
        controller: 'aboutController'
      });

    $urlRouterProvider.otherwise('/home');
  }]);
