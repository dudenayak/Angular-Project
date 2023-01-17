app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: './login-signup.html',
      // })
      // .when('/index', {
      //   templateUrl: 'index.html',
      // })
      .when('/home', {
        templateUrl: './views/home.html',
      })
      .when('/trending', {
        templateUrl: './views/trending.html',
      })
      .when('/playlist', {
        templateUrl: './views/playlist.html',
      })
      .when('/library', {
        templateUrl: './views/library.html',
      })
      .when('/contact', {
        templateUrl: './views/contact.html',
      })
      .when('/', {
        templateUrl: '/login-signup.html',
        controller: 'myCtrl',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },
]);
