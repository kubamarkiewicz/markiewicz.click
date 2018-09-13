
var app = angular.module("myApp", [
    "ngRoute",
    "ngSanitize"
]);


// ROUTING ===============================================
app.config(function ($routeProvider, $locationProvider) { 
    
    $routeProvider 

        .when('/', { 
            templateUrl: 'js/pages/home/index.html' 
        })  
        .when('/ciudadmigrante', { 
            templateUrl: 'js/pages/ciudadmigrante/index.html' 
        }) 
        .when('/shelloffers', { 
            templateUrl: 'js/pages/shelloffers/index.html' 
        })  
        .when('/neotecman', { 
            templateUrl: 'js/pages/neotecman/index.html' 
        })     
        .otherwise({ 
            redirectTo: '/' 
        }); 

    // remove hashbang
    $locationProvider.html5Mode(true);
});

// CORS fix
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.run(function($rootScope, $sce, $http, $location) {

    // fix for displaying html from model field
    $rootScope.trustAsHtml = function(string) {
        return $sce.trustAsHtml(string);
    };

    

    $('#sidebar nav a').click(function(){
        $('#sidebar nav a').removeClass('selected');
        $(this).addClass('selected');
    });

});



    



