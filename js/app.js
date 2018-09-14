
var app = angular.module("myApp", [
    "ngRoute",
    "ngSanitize"
]);


// ROUTING ===============================================
app.config(function ($routeProvider, $locationProvider) { 
    
    $routeProvider 

        .when('/', { 
        })  
        .when('/:page', { 
            templateUrl: function(params){ return 'js/pages/' + params.page + '/index.html'; }
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



    



