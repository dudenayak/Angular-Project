var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', function ($scope, $location, $http, $window) {
  $scope.switchSide = function (event) {
    var left_cover = angular.element(document.querySelector('#left-cover'));
    var left_form = angular.element(document.querySelector('#left-form'));
    var right_cover = angular.element(document.querySelector('#right-cover'));
    var right_form = angular.element(document.querySelector('#right-form'));

    right_form.addClass('fade-in-element');
    left_cover.addClass('fade-in-element');
    left_form.addClass('form-hide');
    left_cover.removeClass('cover-hide');
    right_form.removeClass('form-hide');
    right_cover.addClass('cover-hide');
  };

  $scope.check = function () {
    return $scope.password == $scope.cpassword;
  };

  //   $scope.loginButton = $location.path();
  $scope.reload = function () {
    $window.location.reload();
  };
});

// function loginButton()=

app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: './login-signup.html',
    });
  },
]);
