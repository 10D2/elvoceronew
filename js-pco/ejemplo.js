//function controllerForm($scope, $http) {
//      $scope.JSONCategorias = [ ];
//      $scope.JSONPistos     = [ ];
//      obtenerCategorias($http,$scope);
//      // $scope que acciona la funcion ng-click="limpiar()" LIMPIAR
//      $scope.limpiar = function() {
//        limpiarForm($scope);
//      };
//      // $scope que acciona el ng-change
//      $scope.mostrarPistos = function() { 
//        // $scope.selCategorias NOS TRAE EL VALOR DEL SELECT DE CATEGORIAS
//         obtenerPistos($http,$scope,$scope.selCategorias)
//      };
// 
// } 
 
 function controllerForm($scope, $http) {
      $scope.selecMunicipio = [ ];
      $scope.seccion     = [ ];
      obtenerSelecMunicipio($http,$scope);
      // $scope que acciona el ng-change
      $scope.mostrarSeccion = function() { 
        // $scope.selCategorias NOS TRAE EL VALOR DEL SELECT DE CATEGORIAS
         obtenerSeccion($http,$scope,$scope.selMunicipios)
      };
 }
 
  function obtenerSeccion($http,$scope,idmunicipios){
       $http.post('model/index.php',{ metodo : 'obtenerSeccion' , idmunicipios : idmunicipios })
        .success(function(data) {
            var array = data == null ? [] : (data.pistos instanceof Array ? data.pistos : [data.pistos]);
            $scope.JSONPistos  = array;
            $scope.selPistos   = $scope.JSONPistos;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });    
  }
  
    function obtenerPistos($http,$scope,idCategoria){
       $http.post('model/index.php',{ metodo : 'obtenerPistos' , idCategoria : idCategoria })
        .success(function(data) {
            var array = data == null ? [] : (data.pistos instanceof Array ? data.pistos : [data.pistos]);
            $scope.JSONPistos  = array;
            $scope.selPistos   = $scope.JSONPistos;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });    
  }
  
  function obtenerCategorias($http,$scope){
       $http.post('model/index.php',{ metodo : 'obtenerCategorias' })
        .success(function(data) {
            var array = data == null ? [] : (data.categorias instanceof Array ? data.categorias : [data.categorias]);
            $scope.JSONCategorias  = array;
            $scope.selCategorias   = $scope.JSONCategorias;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });    
  }
  function limpiarForm($scope){
    $scope.selPistos = '';
    $scope.selCategorias = '';
  }