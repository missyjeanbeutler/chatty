'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {
    
      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( message, username ) {
        return $http.post('/messages', { message: message, username: username });
      }
    
  });
