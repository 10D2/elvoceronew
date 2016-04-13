app.controller('ctrlNoticias', ['$scope', '$routeParams', '$http', 'carga', function ($scope, $routeParams, $http, carga) {

        var codigo = $routeParams.idNoticias;

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
        
        $scope.actualiza = false;
        
        $scope.guardarDatosNoticias = function () {
            if ($scope.creando) {
                $scope.formNota.idmunicipio = $scope.menuSeleccionado.idmunicipio;
                if ($scope.seccionPrincipal.idMenus == 2) {
                    $scope.formNota.idMenus = $scope.menusMunSelec.idMenus;

                } else {
                    $scope.formNota.idMenus = $scope.seccionPrincipal.idMenus;

                }
                var name = JSON.stringify($scope.formNota);
                var file = $scope.file;
                carga.imagenNota(file, name);
                console.log(file);
                console.log(name);
                $scope.actualiza = true;
                
            }else{
                $scope.formNota.idmunicipio = $scope.menuSeleccionado.idmunicipio;
                if ($scope.seccionPrincipal.idMenus == 2) {
                    $scope.formNota.idMenus = $scope.menusMunSelec.idMenus;

                } else {
                    $scope.formNota.idMenus = $scope.seccionPrincipal.idMenus;

                }
                var name = JSON.stringify($scope.formNota);
                var file = $scope.file;
                carga.editarImagen(file, name);
                console.log(file);
                console.log(name);
                
                $scope.actualiza = true;
               
            }
        };

    }])

//FIN DE CONTROLADOR 

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
            }]).service('carga', ["$http", "$q", function ($http, $q)
    {
        this.imagenNota = function (file, name)
        {
            var deferred = $q.defer();
            var fd = new FormData();
            fd.append("name", name);
            fd.append("file", file);
            
            return $http.post("./phpAdmin/server.php", fd, {
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
        this.editarImagen = function (file, name)
        {
            var deferred = $q.defer();
            var fdata = new FormData();
            fdata.append("name", name);
            fdata.append("file", file);
            
            return $http.post("./phpAdmin/editarNoticias.php", fdata, {
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
