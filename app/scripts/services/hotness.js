'use strict';

/**
 * @ngdoc service
 * @name csstestApp.hotness
 * @description
 * # hotness
 * Factory in the csstestApp.
 */
angular.module('csstestApp')
  .factory('hotness', function ($resource) {
    // Service logic
    // ...

    // Public API here
     return $resource('https://bgg-json.azurewebsites.net/hot', {}, {
       query: {
         method:'GET',
         params:{

         },
         isArray:true
       }
     });
   });
