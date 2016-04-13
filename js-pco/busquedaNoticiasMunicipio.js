app.controller('busquedaCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {


        var municipio = $routeParams.idmunicipio;

        $scope.busqueda = {};
        $http.get("php/getBusquedaNoticiasMunicipio.php?m=" + municipio).success(function (data) {

            if (jQuery.isEmptyObject(data)) {
                
                sweetAlert("Lo sentimos", "No hay noticias", "error");
                return window.location.href="#/municipios";
              
            }else {

                $scope.busqueda = data;

            } ;



            var cont = 5;
            $scope.totalNoticias = $scope.busqueda.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.busqueda.length > $scope.posicion) {
                    $scope.posicion += cont;
                }
                ;
            };
            $scope.anteriores = function () {
                if ($scope.posicion > cont) {
                    $scope.posicion -= cont;
                }
                ;
            };

        });

    }]);