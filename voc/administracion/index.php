<?php 
    session_start();
    if(!isset($_SESSION['user'])){
        echo "Acceso Degado.";
        die;
    }
?>  

<!DOCTYPE html>
<html ng-app="adminApp" ng-controller="adminCtrl" lang="es">
    <head>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1">
        <link href="../../img-pco/favicon.png" rel="icon"/>
        <title>{{slogan}}</title>

        <!-- BOOTSTRAP CSS -->
        <link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet"/>  
        <link rel="stylesheet" href="../../bootstrap/css/bootstrap-theme.min.css"/> 

        <!-- SWEET ALERT CSS -->
        <link href="../../css/sweetalert.css" rel="stylesheet" type="text/css">

        <!-- CSS PCO -->
        <link href="../../css-pco/mis-estilos.css" rel="stylesheet"/>

        <!-- FONTAWESOME ICONS -->
        <link href="../../font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
    </head>    
    <body>

        <div ng-include="menuSuperior" ></div> 

        <!-- La pagina principal ira aquí -->
        <div ng-view="">
            
        </div>    
       
        
        <!--  AngularJS -->
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-animate.js"></script>
        <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.1.2.js"></script>

        <!-- JQUERY-BOOTSTRAP -->
        <script src="../../js/jquery-1.12.0.min.js"></script>
        <script src="../../bootstrap/js/bootstrap.js"></script>
        <script src="../../js/angular-route.min.js"></script>

        <!-- CONTROLADORES -->
        <script src="controladores-navegacion/administracionCtrl.js"></script>
        <script src="controladores-navegacion/tablaPrincipalNotas.js"></script>
        <script src="controladores-navegacion/crearEditarNoticias.js"></script>
        <script src="controladores-navegacion/multiImagenes.js"></script>
        <script src="controladores-navegacion/tablaPrincipalVideos.js"></script>
        <script src="controladores-navegacion/nvoVideoCtrl.js"></script>
        <script src="controladores-navegacion/tablaPrincipalPublicidad.js"></script>
        <script src="controladores-navegacion/nuevaPublicidad.js"></script>
        <script src="../../js-pco/controladorParaNoticias.js"></script>
        <script src="controladores-navegacion/navegacionAdmin.js"></script>

        <!-- SWEET ALERT -->
        <script src="../../js/sweetalert.min.js"></script>

    </body>
</html>

