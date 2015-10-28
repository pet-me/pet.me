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
    RegisterService.registerUser($scope.data.reg_user, $scope.data.reg_pass, $scope.data.email).then(function(data)
    {
		console.log('returned JSON STRING: ' + data);
     //TODO, parse JSON data and change webpage
    
    });
	} 
}
 ])
.controller('WelcomeCtrl', function($scope) {})
/*
.controller('QuestionnaireCtrl', function($scope,$stateParams,QuestionnaireService) {
    $scope.data = {};
	
	$scope.questionnaire = function() {
    QuestionnaireService.getUser($scope.data.reg_user, $scope.data.reg_pass).then(function(data)
    {
	$scope.reg_username=QuestionnaireService.get($stateParams.reg_user);
   
    });
	}
})
*/
.controller('QuestionnaireCtrl', function($scope) {})
.controller('CreateProfileCtrl', function($scope) {})
.controller('Profile', function($scope) {})
.controller('PetCtrl', function($scope) {})
.controller('PassCtrl', function($scope) {})
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
  $scope.warn = function (message) {
      alert(message);
    };
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
