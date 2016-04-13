app.controller('nosCtrl', ['$scope', '$routeParams', '$http', 'upload', function ($scope, $routeParams, $http, upload) {

        var codigo = $routeParams.idNoticias;

//        $scope.formNota = {};
//        $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
//            $scope.formNota.images = data;
//        });

        $http.get("json/menu.json").success(function (data) {
            $scope.menu = data.menu;
        });
        $http.get("json/menusMunicipios.json").success(function (data) {
            $scope.menusMunicipios = data.menusMunicipios;
        });
        $http.get("json/municipios.json").success(function (data) {
            $scope.pueblos = data.pueblos;
        });


        $scope.municipio = 0;

        $scope.cambio = function () {
            $scope.municipio = $scope.seccionPrincipal.idMenus;
        };
        $scope.seleccionado = false;



//FORMULARIO NUEVO-EDITAR

        $scope.creando = false;

        if (codigo === "nuevo") {
            $scope.creando = true;
        } else
        {
            $scope.formNota = {};
            $http.get('./phpAdmin/getFormularioNota.php?c=' + codigo).success(function (data) {
                $scope.formNota = data;
            });
        }



        $scope.guardarDNoticias = function () {
            if ($scope.creando) {
                $http.post('./phpAdmin/server.php').success(function () {
                    console.log($scope.formNota);
                });
                $scope.formNota.idmunicipio = $scope.menuSeleccionado.idmunicipio;
                if ($scope.seccionPrincipal.idMenus == 2) {
                    $scope.formNota.idMenus = $scope.menusMunSelec.idMenus;

                } else {
                    $scope.formNota.idMenus = $scope.seccionPrincipal.idMenus;

                }
                var name = JSON.stringify($scope.formNota);
                var file = $scope.file;
                upload.imgNoticias(file, name);

                return window.location.href = "#/noticias";
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

            } else {
                $http.post('./phpAdmin/editarNoticias.php').success(function (data) {
                    console.log($scope.formNota);
                });
                var name = JSON.stringify($scope.formNota);
                var file = $scope.file;
                upload.subirFile(file, name).then(function (res) {
                    console.log(res);
                }
                );
            }

        };



        $scope.subirImagen = function () {
            var name = JSON.stringify($scope.formNota);
            var file = $scope.file;
            upload.subirImagenIndividual(file, codigo);
            $scope.formNota = {};
            $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
                $scope.formNota.images = data;

            });
            $scope.formNota = {};
            $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
                $scope.formNota.images = data;

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

//        $scope.eliminarPrincipal= function(){
//            if($scope.formNota.imagenes != ""){
//                $scope.formNota.imagenes="";
//            };
//            
//        };

    }])

//FIN DE CONTROLADOR noticiasCtl


        .directive('uploaderModel', ["$parse", function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, iElement, iAttrs)
                    {
                        iElement.on("change", function (e)
                        {
                            $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
                        });
                    }
                };
            }]).service('upload', ["$http", "$q", function ($http, $q)
    {
        this.imgNoticias = function (file, name)
        {
            var deferred = $q.defer();
            var formData = new FormData();
            formData.append("name", name);
            formData.append("file", file);

            return $http.post("./phpAdmin/nuevaPublicidad.php", formData, {
                headers: {
                    "Content-type": undefined
                },
                transformRequest: angular.identity
            })
                    .success(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function (msg, code)
                    {
                        deferred.reject(msg);
                    });
            return deferred.promise;
        };

        this.subirFile = function (file, name)
        {
            var deferred = $q.defer();
            var formData = new FormData();
            formData.append("name", name);
            formData.append("file", file);
            return $http.post("./phpAdmin/editarNoticias.php", formData, {
                headers: {
                    "Content-type": undefined
                },
                transformRequest: angular.identity
            })
                    .success(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function (msg, code)
                    {
                        deferred.reject(msg);
                    });
            return deferred.promise;
        };



        this.subirImagenIndividual = function (file, idNoticias) {
            var deferred = $q.defer();
            var formData = new FormData();
            formData.append("file", file);
            return $http.post("./phpAdmin/subirImagen.php?id=" + idNoticias, formData, {
                headers: {
                    "Content-type": undefined
                },
                transformRequest: angular.identity
            })
                    .success(function (res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function (msg, code)
                    {
                        deferred.reject(msg);
                    });
            return deferred.promise;
        };

    }]);
