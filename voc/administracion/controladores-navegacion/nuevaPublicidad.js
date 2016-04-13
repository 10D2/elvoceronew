app.controller('publiCtrl', ['$scope', 'upload', function ($scope, upload) {
      
      $scope.actualizado = false;
      
        $scope.nvaPublicidad = function() {
           
            var name = JSON.stringify($scope.nuevaAdd);
            var file = $scope.file;
            upload.newFile(file, name);
            console.log($scope.nuevaAdd);
           // return window.location.href="#/publicidadAdmin";
            
            $scope.actualizado = true;
      
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
            }]).service('upload', ["$http", "$q", function ($http, $q)
    {
        this.newFile = function (file, name)
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

    }]);
