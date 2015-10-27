angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$state', 'LoginService',
                             function ($scope, $state, LoginService) {
                           	$scope.data = {};
                           	
                           	$scope.login = function() {
                               LoginService.loginUser($scope.data.reg_user, $scope.data.reg_pass).then(function(data)
                               {
                           		console.log('returned JSON STRING: ' + data);
                               
                               if (!(data.username == 'null'))
                            	   {
                            	   		window.localStorage.setItem('token', data.username);
                            	   		console.log('token get ' + window.localStorage['token']);
                            	   		
                            	   		$state.go('tab.dash');
                            	   }
                               
                               else
                            	   {
                            	   		window.alert('Invalid login username/password');
                            	   }
                           		
                               });
                           	} 
                           }
                            ])

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
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
