app.controller('tablaVideos', ['$scope', '$http', function ($scope, $http) {

        $scope.tablaVideos = {};
        $http.get('./phpAdmin/consultaTablaVideos.php').success(function (arrayTablaVideos) {
            $scope.tablaVideos = arrayTablaVideos;

            var cont = 10;
            $scope.totalNoticias = $scope.tablaVideos.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.tablaVideos.length > $scope.posicion) {
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

        $scope.eliminarVideos = function (id) {
            $http.get('./phpAdmin/eliminarVideos.php?id=' + id).success(function () {
                swal("Excelente!", "Registro eliminado!", "success");
                $http.get('./phpAdmin/consultaTablaVideos.php').success(function (arrayTablaVideos) {
                    $scope.tablaVideos = arrayTablaVideos;

                    var cont = 10;
                    $scope.totalNoticias = $scope.tablaVideos.length;

                    $scope.posicion = cont;

                    $scope.siguientes = function () {
                        if ($scope.tablaVideos.length > $scope.posicion) {
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