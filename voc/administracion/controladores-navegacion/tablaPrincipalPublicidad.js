app.controller('tablaPublicidad', ['$scope', '$http', function ($scope, $http) {

        $scope.tablaPublicidad = {};
        $http.get('./phpAdmin/consultaTablaPublicidad.php').success(function (arrayTablaPublicidad) {
            $scope.tablaPublicidad = arrayTablaPublicidad;

            var cont = 10;
            $scope.totalNoticias = $scope.tablaPublicidad.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.tablaPublicidad.length > $scope.posicion) {
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

        $scope.eliminarPublicidad = function (id) {
            $http.get('./phpAdmin/eliminarPublicidad.php?id=' + id).success(function () {
                swal("Excelente!", "Registro eliminado!", "success");
                $http.get('./phpAdmin/consultaTablaPublicidad.php').success(function (arrayTablaPublicidad) {
                    $scope.tablaPublicidad = arrayTablaPublicidad;

                    var cont = 10;
                    $scope.totalNoticias = $scope.tablaPublicidad.length;

                    $scope.posicion = cont;

                    $scope.siguientes = function () {
                        if ($scope.tablaPublicidad.length > $scope.posicion) {
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
            });
        };

    }]);
        