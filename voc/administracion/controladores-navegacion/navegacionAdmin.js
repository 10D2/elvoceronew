app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'portada.html'
            })
            .when('/noticias', {
                templateUrl: 'noticias.html'
            })
            .when('/formularioNota/:idNoticias', {
                templateUrl: 'formularioNota.html'
            })
            .when('/subirImagenes/:idNoticias', {
                templateUrl: 'subirImagenes.html'
            })
            .when('/videos', {
                templateUrl: 'videos.html'
            })
            .when('/agregarVideo', {
                templateUrl: 'agregarVideo.html'
            })
            .when('/publicidadAdmin', {
                templateUrl: 'publicidadAdmin.html'
            })
            .when('/agregarPublicidad', {
                templateUrl: 'agregarPublicidad.html'
            })
            .when('/noticia/:id', {
                templateUrl: '../noticia.html'
            })
           
            .otherwise({
                redirectTo: '/'
            });
});


