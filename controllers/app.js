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

  $scope.reload = function () {
    $window.location.reload();
  };

  // SAVE DATA IN LOCAL STORAGE
  $scope.saveData = function ($event) {
    $event.preventDefault();
    // console.log($scope.username);
    let user = {
      username: $scope.username,
      email: $scope.email,
      phone: $scope.phone,
      password: $scope.password,
      cpassword: $scope.cpassword,
    };
    let user_records = JSON.parse(localStorage.getItem('users'))
      ? JSON.parse(localStorage.getItem('users'))
      : [];

    // console.log(user);
    if (
      user_records.some((v) => {
        return v.email == $scope.email;
      })
    ) {
      alert('This Email ID is already in use!');
    } else {
      user_records.push(user);
      console.log(user_records);
      alert('User registered successfully!! Please login now!');
      localStorage.setItem('users', JSON.stringify(user_records));
      $scope.username = '';
      $scope.email = '';
      $scope.email = '';
      $scope.phone = '';
      $scope.password = '';
      $scope.cpassword = '';

      location.reload();
      return false;
    }
  };

  // GET DATA FROM LOCAL STORAGE
  $scope.loadData = function ($event) {
    let user = {
      username: $scope.username_login,
      password: $scope.password_login,
    };

    //   user_records = JSON.parse(localStorage.getItem('users'))
    //     ? JSON.parse(localStorage.getItem('users'))
    //     : [];
    //   let checkuser = user_records.filter((v) => {
    //     if (
    //       (v.username == user.username || v.email == user.username) &&
    //       v.password == user.password
    //     ) {
    //       return v;
    //     }
    //   });

    //   if (checkuser.length > 0) {
    //     console.log(checkuser);
    //     alert('Login successfully!');
    //   } else {
    //     alert('Login failed');
    //   }

    user_records = JSON.parse(localStorage.getItem('users'))
      ? JSON.parse(localStorage.getItem('users'))
      : [];
    if (
      user_records.some((v) => {
        return (
          (v.username == user.username || v.email == user.username) &&
          v.password == user.password
        );
      })
    ) {
      alert('Logged in successfully!');
      let current_user = user_records.filter((v) => {
        return (
          v.username == user.username ||
          (v.email == user.username && v.password == user.password)
        );
      })[0];
      localStorage.setItem('code', 'secret');
      // $location.path('/home');
      href = 'index.html';
    } else {
      alert('Login failed');
    }
  };
});
