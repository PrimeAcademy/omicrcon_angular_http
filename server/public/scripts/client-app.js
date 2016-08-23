var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function ($scope, $http) {
  console.log('IndexController loaded');
  /**---- AJAX Review ----**/

  // controllerAs syntax experiment
  //var _index = this;
  //_index.firstName = 'Kris';

  $scope.firstName = 'Antoinette'; // data...the model

  $scope.addPerson = function () { // a scoped function
    $scope.text = 'A new person';
  };

  $scope.foods = [
    { name: 'chips' },
    { name: 'doritos' }
  ];

  /**---- AJAX Requests with Angular's $http ----**/
  $http({
    method: 'GET',
    url: '/things'
  }).then(function (response) {
    console.log('response object', response);
    $scope.snacks = response.data;
  });

  $http({
    method: 'POST',
    url: '/things',
    data: { thing: 'food' }
  })
  .then(function (response) {
    console.log('response object', response);
    $scope.snacks = response.data;
  });

}]);
