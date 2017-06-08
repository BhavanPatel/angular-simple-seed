angular_simple_seed.controller('homeController', ['$scope','$state',
  function($scope,$state) {
    "use strict";
    console.log("Home Controller.......");
    $scope.go = function() {
      $state.go('about');
    };
  }
]);
