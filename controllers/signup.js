var app = angular.module('myApp', ['ngRoute']);

// HOME CONTROLLER
app.controller('homeCtrl', [
  '$scope',
  '$location',
  '$http',
  function ($scope, $location, $http) {
    var check = localStorage.getItem('code');
    if (check == 'secret') {
    } else {
      $location.path('/');
    }
    $scope.logout = () => {
      localStorage.setItem('code', 'logout');
      $location.path('/');
    };

    // Loading data from json file
    $scope.homeSongs = [];
    $http.get('data/home.json').then(function (res) {
      $scope.homeSongs = res.data;
    });

    $scope.recentSongs = [];
    $http.get('data/recently-played.json').then(function (res) {
      $scope.recentSongs = res.data;
    });
  },
]);

// TRENDING CONTROLLER
app.controller('trendingCtrl', [
  '$scope',
  '$location',
  '$http',
  function ($scope, $location, $http) {
    var check = localStorage.getItem('code');
    if (check == 'secret') {
    } else {
      $location.path('/');
    }
    $scope.logout = () => {
      localStorage.setItem('code', 'logout');
      $location.path('/');
    };

    // Loading data from json file
    $scope.trendingSongs = [];
    $http.get('data/trending.json').then(function (res) {
      $scope.trendingSongs = res.data;
    });

    $scope.trendingSongs2 = [];
    $http.get('data/trending2.json').then(function (res) {
      console.log('object');
      $scope.trendingSongs2 = res.data;
      console.log(res.data);
    });
  },
]);

// PLAYLIST CONTROLLER
app.controller('playlistCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    var check = localStorage.getItem('code');
    if (check == 'secret') {
    } else {
      $location.path('/');
    }
    $scope.logout = () => {
      localStorage.setItem('code', 'logout');
      $location.path('/');
    };
  },
]);

// LIBRARY CONTROLLER
app.controller('libraryCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    var check = localStorage.getItem('code');
    if (check == 'secret') {
    } else {
      $location.path('/');
    }
    $scope.logout = () => {
      localStorage.setItem('code', 'logout');
      $location.path('/');
    };
  },
]);

// CONTACT CONTROLLER
app.controller('contactCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    var check = localStorage.getItem('code');
    if (check == 'secret') {
    } else {
      $location.path('/');
    }
    $scope.logout = () => {
      localStorage.setItem('code', 'logout');
      $location.path('/');
    };
  },
]);

// LOGIN CONTROLLER
app.controller('myCtrl', [
  '$scope',
  '$location',
  '$http',
  '$window',
  'getLocalStorage',
  '$rootScope',
  function ($scope, $location, $http, $window, getLocalStorage, $rootScope) {
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
      $window.location.href = '../index.html';
    };

    // SAVE DATA IN LOCAL STORAGE
    $scope.users = getLocalStorage.getUsers();
    $scope.saveData = function ($event) {
      $event.preventDefault();
      $scope.user = {
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone,
        password: $scope.password,
        cpassword: $scope.cpassword,
      };
      if (
        $scope.users.some((data) => {
          return data.email == $scope.email;
        })
      ) {
        alert('This Email ID is already in use!');
      } else if (
        $scope.users.some((data) => {
          return data.username == $scope.username;
        })
      ) {
        alert('This username is already taken!');
      } else {
        $scope.users.push($scope.user);
        getLocalStorage.updateUsers($scope.users);
        $scope.username = '';
        $scope.email = '';
        $scope.phone = '';
        $scope.password = '';
        $scope.cpassword = '';
        alert('User registered successfully!! Please login now!');
        $window.location.href = '../index.html';
      }
    };

    // GET DATA FROM LOCAL STORAGE
    $scope.loadData = function () {
      if (
        $scope.users.some((data) => {
          return (
            (data.email == $scope.username_login ||
              data.username == $scope.username_login) &&
            data.password == $scope.password_login
          );
        })
      ) {
        let currUser = $scope.users.map((data) => {
          return (
            data.username == $scope.username_login ||
            (data.email == $scope.username_login &&
              data.password == $scope.username_password)
          );
        })[0];
        console.log($scope.currUser);
        alert('User logged in successfully!');
        localStorage.setItem('code', 'secret');
        $location.path('/home');
      } else {
        alert('Login failed! Please try again!');
      }
    };
  },
]);

app.factory('getLocalStorage', function () {
  var userList = {};
  return {
    list: userList,
    updateUsers: function (usersArray) {
      if (window.localStorage && usersArray) {
        // method used to store data in local storage
        localStorage.setItem('users', angular.toJson(usersArray));
      }
      userList = usersArray;
    },
    getUsers: function () {
      // method used to get data from local storage
      userList = angular.fromJson(localStorage.getItem('users'));
      return userList ? userList : [];
    },
  };
});
