angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
        LoginService.loginUser($scope.data.reg_user, $scope.data.reg_pass).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('RegisterCtrl', ['$scope', 'RegisterService',
  function ($scope, RegisterService) {
	$scope.data = {};
	
	$scope.register = function() {
    RegisterService.registerUser($scope.data.reg_user, $scope.data.reg_pass).then(function(data)
    {
		console.log('returned JSON STRING: ' + data);
     //TODO, parse JSON data and change webpage
    
    });
	} 
}
 ])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
  $scope.onSwipeLeft = function() {
	    //RegisterService.registerUser($scope.data.reg_user, $scope.data.reg_pass).then(function(data)
	    //{
			console.log('You swiped left: ');
	     //TODO, parse JSON data and change webpage
	    
	   // });
		} 
  // use this is picture viewer page slide to look at pics and set active slide to chosen picture $scope.myActiveSlide = 1;
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
