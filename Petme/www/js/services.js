angular.module('starter.services', [])

.factory('LoginService', ['$http', 'ApiEndpoint', function ($http, ApiEndpoint) {
	return {
		loginUser: function (name, pw) {
			
			var userData = $.param({reg_user: name, reg_pass: pw});
			
        var promise = 
           $http({
        	   	method: 'POST',
		        url: ApiEndpoint.url + '/login',
		        data: $.param({
		            reg_user: name,
		            reg_pass: pw
		        }),
		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    })
		    .then(function(response) {
		            // success
		    	return response.data;
		    }, 
		    function(response) { // optional
		            // failed
				return response.data;
		    })
        
            return promise;
           }
         }
       }
 ])


.factory('RegisterService', ['$http', 'ApiEndpoint', function ($http, ApiEndpoint) {
	return {
		registerUser: function (name, pw,email) {
			
			var userData = $.param({reg_user: name, reg_pass: pw, reg_email:email});
			
        var promise = 
           $http({
        	   	method: 'POST',
		        url: ApiEndpoint.url + '/register',
		        // sending the data in form format makes it secure by putting it in form format 
		        data: $.param({
		            reg_user: name,
		            reg_pass: pw,
		            reg_email:email
		        }),
		        // container with format info
		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    })
		    .then(function(response) {
		            // success
		    	return response.data;
		    }, 
		    function(response) { // optional
		            // failed
				return response.data;
		    })
        
            return promise;
           }
         }
       }
 ])
 
 .factory('ProfileService', ['$http', 'ApiEndpoint', function ($http, ApiEndpoint) {
	return {
		getProfile: function () 
		{
        var promise = 
           $http({
        	    method: 'GET',
		        url: ApiEndpoint.url + '/profile/query?username=' + window.localStorage['token']
		    })
		    .then(function(response) {
		            // success
		    	return response.data;
		    }, 
		    function(response) { // optional
		            // failed
				return response.data;
		    })
        
            return promise;
           }
         }
       }
 ])
 

 /*
.factory('QuestionnaireService', ['$http', 'ApiEndpoint', function ($http, ApiEndpoint) {
	return {
		getUser: function (name, pw,email) {
			
			var userData = $.param({reg_user: name, reg_pass: pw, reg_user: email});
			
        var promise = 
           $http({
        	   	method: 'POST'',
		        url: ApiEndpoint.url + '/register',
		        data: $.param({
		            reg_user: name,
		            reg_pass: pw
		        }),
		        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		    })
		    .then(function(response) {
		            // success
		    	return response.data;
		    }, 
		    function(response) { // optional
		            // failed
				return response.data;
		    })
        
            return promise;
           }
         }
       }
 ])

*/

.factory('Chats', function($http, ApiEndpoint) {
  // Might use a resource here that returns a JSON array
	
	var name = window.localStorage['token'];
	
	var userData = $.param({username: name});
	
	
	var chats = [];
	
	var promise = $http({
 	    method: 'POST',
        url: ApiEndpoint.url + '/message',
     // sending the data in form format makes it secure by putting it in form format 
        data: $.param({
            username: name
        }),
        // container with format info
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(function(response) {
            // success
    	
    	for (var i in response.data.array)
    	{
    		var item = response.data.array[i];
    		
    		chats.push({
    			id : item.id,
    			name : item.name,
    			lastText: item.lastText,
    			face : item.face
    		});
    	}
    	
    	//return response.data.array;
    }, 
    function(response) { // optional
            // failed
		//return response.data;
    });
	
  return {
    all: function() {
    	return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function($http, ApiEndpoint) {
	var friends = [];	
	
  var promise =  $http({
 	    method: 'GET',
	        url: ApiEndpoint.url + '/profile/friends?username=' + window.localStorage['token']
	    })
	    .then(function(response) {
	            // success
	    	//return response.data.array;

	    	for (var i in response.data.array)
	    	{
	    		var item = response.data.array[i];
	    		
	    		friends.push({
	    			id : item.id,
	    			name : item.name,
	    			notes: item.notes,
	    			face : item.face
	    		});
	    	}
	    }, 
	    function(response) { // optional
	            // failed
			//return response.data;
	    });
  
  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      
    	 for (var i = 0; i < friends.length; i++) {
    	        if (friends[i].id === parseInt(friendId)) {
    	          return friends[i];
    	        }
    	      }
    	 
    	 console.log('got emtpy');
    	      return null;
    }
  }
});