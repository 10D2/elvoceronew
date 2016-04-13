app.controller('videoCtrl', ['$scope', '$http', function ($scope, $http) {
      
      $scope.actualizado = false;
      
        $scope.nvoVideo = function() {
            $http.post('./phpAdmin/nuevoVideo.php', $scope.videoNvo).success(function(){
                $scope.actualizado = true;
                
            });  
            console.log($scope.videoNvo);  
        };

    }]);
