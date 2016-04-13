app.controller('tablaNota', ['$scope', '$routeParams', '$http', 'upload', function ($scope, $routeParams, $http, upload, $location) {
        var codigo = $routeParams.idNoticias;

        $scope.tablaNota = {};
        $http.get('./phpAdmin/consultaTablaNoticias.php').success(function (arrayTablaNotas) {

            $scope.tablaNota = arrayTablaNotas;
            var cont = 10;
            $scope.totalNoticias = $scope.tablaNota.length;
            $scope.posicion = cont;
            $scope.siguientes = function () {
                if ($scope.tablaNota.length > $scope.posicion) {
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


        $scope.eliminar = function (idNoticias) {
            console.log(idNoticias);
            $http.get('./phpAdmin/eliminarNoticias.php?id=' + idNoticias).success(function () {

                swal("Excelente!", "Registro eliminado!", "success");
                $http.get('./phpAdmin/consultaTablaNoticias.php').success(function (arrayTablaNotas) {
                    $scope.tablaNota = arrayTablaNotas;
                    var cont = 10;
                    $scope.totalNoticias = $scope.tablaNota.length;
                    $scope.posicion = cont;
                    $scope.siguientes = function () {
                        if ($scope.tablaNota.length > $scope.posicion) {
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


        $scope.eliminarImagen = function (id) {
            $scope.formNota = {};
            $http.get('./phpAdmin/eliminarImagen.php?id=' + id).success(function () {
                $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
                    $scope.formNota.images = data;
                });
            });
        };


    }]);
