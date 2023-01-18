var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', [
  '$scope',
  '$location',
  '$http',
  '$window',
  'getLocalStorage',
  function ($scope, $location, $http, $window, getLocalStorage) {
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
        $window.location.href = '../login-signup.html';
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
        // console.log('user found');
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
        $window.location.href = '../index.html#!/home';
      } else {
        alert('Login failed! Please try again!');
      }
    };
  },
]);
// comment
// $scope.saveData = function ($event) {
//   $event.preventDefault();
//   // console.log($scope.username);
//   let user = {
//     username: $scope.username,
//     email: $scope.email,
//     phone: $scope.phone,
//     password: $scope.password,
//     cpassword: $scope.cpassword,
//   };
//   let user_records = JSON.parse(localStorage.getItem('users'))
//     ? JSON.parse(localStorage.getItem('users'))
//     : [];

//   // console.log(user);
//   if (
//     user_records.some((v) => {
//       return v.email == $scope.email;
//     })
//   ) {
//     alert('This Email ID is already in use!');
//   } else {
//     user_records.push(user);
//     console.log(user_records);
//     alert('User registered successfully!! Please login now!');
//     localStorage.setItem('users', JSON.stringify(user_records));
//     $scope.username = '';
//     $scope.email = '';
//     $scope.email = '';
//     $scope.phone = '';
//     $scope.password = '';
//     $scope.cpassword = '';

//     location.reload();
//     return false;
//   }
// };
// comment over

// // comment

// // GET DATA FROM LOCAL STORAGE
// $scope.loadData = function ($event) {
//   let user = {
//     username: $scope.username_login,
//     password: $scope.password_login,
//   };

//   //   user_records = JSON.parse(localStorage.getItem('users'))
//   //     ? JSON.parse(localStorage.getItem('users'))
//   //     : [];
//   //   let checkuser = user_records.filter((v) => {
//   //     if (
//   //       (v.username == user.username || v.email == user.username) &&
//   //       v.password == user.password
//   //     ) {
//   //       return v;
//   //     }
//   //   });

//   //   if (checkuser.length > 0) {
//   //     console.log(checkuser);
//   //     alert('Login successfully!');
//   //   } else {
//   //     alert('Login failed');
//   //   }

//   user_records = JSON.parse(localStorage.getItem('users'))
//     ? JSON.parse(localStorage.getItem('users'))
//     : [];
//   if (
//     user_records.some((v) => {
//       return (
//         (v.username == user.username || v.email == user.username) &&
//         v.password == user.password
//       );
//     })
//   ) {
//     alert('Logged in successfully!');
//     let current_user = user_records.filter((v) => {
//       return (
//         v.username == user.username ||
//         (v.email == user.username && v.password == user.password)
//       );
//     })[0];
//     localStorage.setItem('code', 'secret');
//     $window.location.href = '../index.html#!/home';
//   } else {
//     alert('Login failed');
//   }
// };

// comment over

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
