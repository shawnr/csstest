"use strict";angular.module("csstestApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("csstestApp").controller("MainCtrl",["$scope","hotness",function(a,b){a.hotness=b.query()}]),angular.module("csstestApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("csstestApp").factory("hotness",["$resource",function(a){return a("https://bgg-json.azurewebsites.net/hot",{},{query:{method:"GET",params:{},isArray:!0}})}]),angular.module("csstestApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h1>The Hotness</h1> <p class="lead"> <ol> <li>{{hotness[0].name}}</li> <li>{{hotness[1].name}}</li> <li>{{hotness[2].name}}</li> <li>{{hotness[3].name}}</li> <li>{{hotness[4].name}}</li> <li>{{hotness[5].name}}</li> <li>{{hotness[6].name}}</li> <li>{{hotness[7].name}}</li> <li>{{hotness[8].name}}</li> <li>{{hotness[9].name}}</li> </ol> </p> </div>')}]);