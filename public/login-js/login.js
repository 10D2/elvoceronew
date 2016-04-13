var app = angular.module('loginApp', ['login.loginService']);

app.controller('iniciarCtrl', ['$scope', 'LoginService', function($scope, LoginService){
        
        $scope.invalido = false;
        $scope.cargando = false,
        $scope.mensaje = "";
        
        $scope.info = {};
        
        $scope.ingresar = function(info){
            
            if(info.usuario.length <3){
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su usuario';
                return;
            }else if(info.contrasena.length <3){
                $scope.invalido = true;
                $scope.mensaje = 'Ingrese su contraseña';
                return;
            }
            
            $scope.invalido = false;
            $scope.cargando = true;
            
            LoginService.login (info).then(function(data){
                if (data.err){
                    $scope.invalido = true;
                    $scope.cargando = false;
                    $scope.mensaje = data.mensaje;
                }else{
                    console.log(data.mensaje);
                    window.location = "../voc/administracion/index.php";
                }
            });
        };
        
}]);
