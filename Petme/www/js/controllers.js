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
                            	   		// token
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
/*
.controller('CreateProfileCtrl', function($scope) 
		{
			$scope.pictureUrl = 'http://placehold.it/300x300';
			$scope.biosnip ='';
		})
		*/
.controller('CreateProfileCtrl', ['$scope', 'CreateProfileService',
	function ($scope, CreateProfileService) 
	{
	$scope.pictureUrl = 'http://placehold.it/300x300';
	$scope.bioSnip = '';
	$scope.username = '';
	$scope.firstname = '';
	$scope.lastname = '';
	$scope.data = {};
	
	$scope.create = function() 
	{
    CreateProfileService.createprofile($scope.username, $scope.firstname, $scope.lastname, $scope.bioSnip).then(function(data)
    {
		console.log('returned JSON STRING: ' + data);
     //TODO, parse JSON data and change webpage
    
    });
	} 
}])
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
    /*
  $scope.lastEventCalled = '';
  var element = angular.element(document.querySelector('#eventPlaceholder'));
  var events = 
	  [
                {
                	event: 'swipedown',
                	text: 'petPic'
                },
                {
                	event: 'swipeup',
                	text: 'personPic'
                },
                {
                	event: 'swipeleft',
                	text: 'pass'
                },
                {
                	event: 'swiperight',
                	text: 'pet'
                }
      ];
  angular.forEach(events, function(obj)
  {
	  $ionicGesture.on(obj.event,
			  function (event)
			  {
		  			$scope.$apply(function ()
		  			{
		  				if(obj.text == 'pet')
		  				{
		  					$scope.lastEventCalled = obj.text
		  				}
		  				if(obj.text == 'pass')
		  				{
		  					$scope.lastEventCalled = obj.text
		  				}
		  			});
			  }, element);
  });
  */
})

.controller('FriendDetailCtrl', ['$scope', '$state', 'ProfileService', '$stateParams', 'Friends',
             function ($scope, $state, ProfileService, $stateParams, Friends) 
             {
	  			$scope.friend = Friends.get($stateParams.friendId);
	  			$scope.data = {};
             } 
])

.controller('DashCtrl', ['$scope', 
             function ($scope) 
             {
          $scope.myFace = 'http://petme.heliohost.org/img/' + window.localStorage['token'] + '.jpg';
             } 
])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
