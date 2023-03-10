app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
      })
      .when('/trending', {
        templateUrl: 'views/trending.html',
        controller: 'trendingCtrl',
      })
      .when('/playlist', {
        templateUrl: 'views/playlist.html',
        controller: 'playlistCtrl',
      })
      .when('/library', {
        templateUrl: 'views/library.html',
        controller: 'libraryCtrl',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',
      })
      .when('/', {
        templateUrl: 'views/login-signup.html',
        controller: 'myCtrl',
      })
      .otherwise({
        redirectTo: '/home',
      });
  },
]);
