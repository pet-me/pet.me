angular.module('starter.services', [])

.service('LoginService', function($q) {

    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            

            if (name == 'admin'&& pw=='secret'|| reg_pass == 'Joe'&& pw=='Schmo'||name == 'Mike'&& pw=='Jones'||name == 'Jane'&& pw=='Doe'||name == 'John'&& pw=='Smith'||name == 'Halle'&& pw=='Berry'||name=='hello'&& pw=='world'){
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('RegisterService', ['$http', 'ApiEndpoint', function ($http, ApiEndpoint) {
	return {
		registerUser: function (name, pw,email) {
			
			var userData = $.param({reg_user: name, reg_pass: pw, reg_email:email});
			
        var promise = 
           $http({
        	   	method: 'POST',
		        url: ApiEndpoint.url + '/register',
		        data: $.param({
		            reg_user: name,
		            reg_pass: pw,
		            reg_email:email
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

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Joe Schmo',
    lastText: 'You on your way?',
    face: 'http://pmcvariety.files.wordpress.com/2013/01/6a00d8341bfc7553ef017c355fa15e970b-pi.jpg'
  }, {
    id: 1,
    name: 'Mike Jones',
    lastText: 'Hey, it\'s me',
    face: 'http://stupiddope.com/wp-content/uploads/2013/12/paul-wall.png'
  }, {
    id: 2,
    name: 'John Smith',
    lastText: 'Did you get the ice cream?',
    face: 
'http://pmcdeadline2.files.wordpress.com/2012/10/john-smith-001__121019135219.jpg'
  }, {
    id: 3,
    name: 'Jane Doe',
    lastText: 'I should buy a boat',
    face: 'http://dreamatico.com/data_images/girl/girl-2.jpg'
  }, {
    id: 4,
    name: 'Halle Berry',
    lastText: 'Look at my mukluks!',
    face: 
'http://cdn.yournextshoes.com/wp-content/uploads/2015/07/Halle-Berry-Hair.jpg'
  }];

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
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Joe Schmo',
    notes: 'Enjoys drawing things',
    face: 
    	'http://pmcvariety.files.wordpress.com/2013/01/6a00d8341bfc7553ef017c355fa15e970b-pi.jpg'
  }, {
    id: 1,
    name: 'Mike Jones',
    notes: 'Odd obsession with everything',
    face: 'http://stupiddope.com/wp-content/uploads/2013/12/paul-wall.png'
  }, {
    id: 2,
    name: 'John Smith',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'http://pmcdeadline2.files.wordpress.com/2012/10/john-smith-001__121019135219.jpg'
  }, {
    id: 3,
    name: 'Jane Doe',
    notes: 'I think he needs to buy a boat',
    face: 'http://dreamatico.com/data_images/girl/girl-2.jpg'
  }, {
    id: 4,
    name: 'Hale Berry',
    notes: 'Just the nicest guy',
    face: 'http://cdn.yournextshoes.com/wp-content/uploads/2015/07/Halle-Berry-Hair.jpg'

  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
