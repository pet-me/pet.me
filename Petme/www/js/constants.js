angular.module('starter')

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('ApiEndpoint', {
  url: 'http://restpet-petmeapp.rhcloud.com/rest'
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
});
