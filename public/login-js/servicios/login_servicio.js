var app = angular.module('login.loginService',[]);

app.factory('LoginService', ['$http', '$q', function ($http, $q) {

        var self = {
            login: function (info) {
                var i = $q.defer();
                
                $http.post('./php/postVerificar.php', info).success(function(data){
                    console.log(data);
                    i.resolve(data);
                });
                
                return i.promise;
            }
        };
        return self;
    }]);