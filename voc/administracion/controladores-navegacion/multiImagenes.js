app.controller('multiCtrl', ['$scope', '$routeParams', '$http', 'subir', function ($scope, $routeParams, $http, subir) {

        var codigo = $routeParams.idNoticias;
        $scope.actualizar = false;
        $scope.formNota = {};
        $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
            $scope.formNota.images = data;
        });

        $scope.subirImagen = function () {
            var name = JSON.stringify($scope.formNota);
            var file = $scope.file;
            subir.multiImg(file, codigo);
            $scope.formNota = {};
            $http.get('./phpAdmin/getImagenes.php?c=' + codigo).success(function (data) {
                $scope.formNota.images = data;
                $scope.actualizar =true;
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
                    $scope.actualizar = true;
                });
            });
        };

    }])


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
            }]).service('subir', ["$http", "$q", function ($http, $q)
    {
        this.multiImg = function (file, idNoticias)
        {
            var deferred = $q.defer();
            var multi = new FormData();
            multi.append("file", file);

            return $http.post("./phpAdmin/subirImagen.php?id=" + idNoticias, multi, {
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

