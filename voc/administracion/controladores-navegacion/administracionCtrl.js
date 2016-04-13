
var app = angular.module('adminApp', ['ui.bootstrap', 'ngRoute']);

//CONTROLADOR PRINCIPAL
app.controller('adminCtrl', ['$scope', function ($scope) {
        $scope.menuSuperior = 'encabezadoMenu.html';


        $scope.slogan = "El Vocero | La voz oficial de la noticia";

    }]);

