app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'portada.html'
            }) 
            .when('/municipios', {
                templateUrl: 'municipios.html'
            })
            .when('/politica', {
                templateUrl: 'politica.html'
            })
            .when('/policia', {
                templateUrl: 'policia.html'
            })
            .when('/deportes', {
                templateUrl: 'deportes.html'
            })
            .when('/espectaculos', {
                templateUrl: 'espectaculos.html'
            })
            .when('/seccionPublicidad', {
                templateUrl: 'seccionPublicidad.html'
            })
            .when('/vistaPublicidad/:idBanners', {
                templateUrl: 'vistaPublicidad.html'
            })
            .when('/videos', {
                templateUrl: 'videos.html'
            })
            .when('/noticia/:id', {
                templateUrl: 'noticia.html'
            })
            .when('/verVideos/:idVideos', {
                templateUrl: 'verVideos.html'
            })
            .when('/noticiasMunicipios/:idmunicipio', {
                templateUrl: 'noticiasMunicipios.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

