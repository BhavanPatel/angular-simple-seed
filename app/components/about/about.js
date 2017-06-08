angular_simple_seed.controller('aboutController', ['$scope','$state',
  function($scope,$state) {
    "use strict";
    console.log("About Controller.......");
    $scope.go = function() {
      $state.go('home');
    };
  }
]);
