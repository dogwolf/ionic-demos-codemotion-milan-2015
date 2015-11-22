// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('app-complex-Ctrl', function($scope) {
  $scope.items = [
    {"title": "Item 1","code" : "1","img" : "img/img1.png"},
    {"title": "Item 2","code" : "2","img" : "img/img2.png"},
    {"title": "Item 3","code" : "3","img" : "img/img3.png"},
    {"title": "Item 4","code" : "4","img" : "img/img4.png"},
    {"title": "Item 5","code" : "5","img" : "img/img5.png"}
  ]
  $scope.editItem = function(item) {
      item.title = "Edited Item"
    }
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('action-sheet-Ctrl', function($scope,
  $ionicActionSheet) {
  $scope.showDetails = function() {
    $ionicActionSheet.show({
     buttons: [
       { text: 'Save all'},
        { text: 'Only last change' }
     ],
     destructiveText: 'Discard',
     titleText: 'Save changes?',
     cancelText: 'Cancel',
     buttonClicked: function(index) {
       return true;
     }
   });
  }
})

.controller('ItmsCtrl',function($scope, $ionicPopup, $timeout) {

  $scope.selectedItem = null;

	var list = [];

  for (index = 0; index < 100; ++index) {
    list.push({n: 'Item n. ' + index});
	}

  $scope.list = list;
})


.controller('app-swipe-Ctrl', function($scope, $ionicSideMenuDelegate, $http) {
      $scope.tech = [
        'node',
        'graphics',
        'es6',
        'mv'
      ];

      litems = [
        {"title": "Item 1","tech":"node"},
        {"title": "Item 2","tech":"node"},
        {"title": "Item 3","tech":"es6"},
        {"title": "Item 4","tech":"mv"},
        {"title": "Item 5","tech":"graphics"}
      ]

      $scope.allEpisodes = litems;
      $scope.episodes = litems;

      $scope.filterBy = function(filter){
        if(filter === 'all'){
          return $scope.episodes = $scope.allEpisodes;
        }
        $scope.episodes = $scope.allEpisodes.filter(function(ep){return ep.tech.indexOf(filter) > -1;})
      }

      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
    })
