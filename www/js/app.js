angular.module('App', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('Geolocation', function() {
  return {
    "formatted_address": "Herndon, VA, USA",
    "geometry": {
      "location": {
        "lat": 38.9696,
        "lng": -77.3861
      }
    },
    "place_id": "ABC"
      //"ChIJ7cv00DwsDogRAMDACa2m4K8"
  };
})

.factory('Types', function() {
  return [
    {type: 'Park', enabled: true},
    {type: 'Hospital', enabled: true},
    {type: 'Library', enabled: true},
    {type: 'Museum', enabled: true}

  ];
})

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/places');
})
