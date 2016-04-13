app.controller('consultaSecciones', ['$scope', '$http', function ($scope, $http) {

//CONSULTAS PARA LAS ULTIMAS NOTICIAS DE TODAS LAS SECCIONES EN PORTADA
        $scope.noticia = {};
        $http.get('./php/consultaSeccionMunicipios.php').success(function (arraySeccMpios) {
            $scope.noticia = arraySeccMpios;
        });

        $scope.politica = {};
        $http.get('./php/consultaSeccionPolitica.php').success(function (arraySeccGob) {
            $scope.politica = arraySeccGob;
        });

        $scope.policia = {};
        $http.get('./php/consultaSeccionPolicia.php').success(function (arraySeccPolicia) {
            $scope.policia = arraySeccPolicia;
        });

        $scope.deportes = {};
        $http.get('./php/consultaSeccionDeportes.php').success(function (arraySeccDeportes) {
            $scope.deportes = arraySeccDeportes;
        });

        $scope.espec = {};
        $http.get('./php/consultaSeccionEspectaculos.php').success(function (arraySeccEspec) {
            $scope.espec = arraySeccEspec;
        });
    }]);

//CONSULTAS PARA LAS SINTESIS DE TODAS LAS NOTICIAS EN CADA UNA DE LAS SECCIONES 


//sección de Publicidad en las Notas
app.controller('publicidadEnNotas', ['$scope', '$http', function ($scope, $http) {
        $scope.publicidadNotas = {};
        $http.get('./php/consultaPublicidadEnNotas.php').success(function (arrayPublicidadNotas) {
            $scope.publicidadNotas = arrayPublicidadNotas;
        });

    }]);


//sección de Municipios

app.controller('seccionMunicipios', ['$scope', '$http', function ($scope, $http) {

        $scope.mpios = {};
        $http.get('./php/ConsultaSeccMpios.php').success(function (arraySeccMupios) {
            $scope.mpios = arraySeccMupios;

            var cont = 5;
            $scope.totalNoticias = $scope.mpios.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.mpios.length > $scope.posicion) {
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
        
        $scope.municipios = [{
            "idmunicipio": "1",
            "municipio": "Abal\u00e1"
        }, {
            "idmunicipio": "2",
            "municipio": "Acanceh"
        }, {
            "idmunicipio": "3",
            "municipio": "Akil"
        }, {
            "idmunicipio": "4",
            "municipio": "Baca"
        }, {
            "idmunicipio": "5",
            "municipio": "Bokob\u00e1"
        }, {
            "idmunicipio": "6",
            "municipio": "Buctzotz"
        }, {
            "idmunicipio": "7",
            "municipio": "Cacalch\u00e9n"
        }, {
            "idmunicipio": "8",
            "municipio": "Calotmul"
        }, {
            "idmunicipio": "9",
            "municipio": "Cansahcab"
        }, {
            "idmunicipio": "10",
            "municipio": "Cantamayec"
        }, {
            "idmunicipio": "11",
            "municipio": "Celest\u00fan"
        }, {
            "idmunicipio": "12",
            "municipio": "Cenotillo"
        }, {
            "idmunicipio": "13",
            "municipio": "Conkal"
        }, {
            "idmunicipio": "14",
            "municipio": "Cuncunul"
        }, {
            "idmunicipio": "15",
            "municipio": "Cuzam\u00e1"
        }, {
            "idmunicipio": "16",
            "municipio": "Chacsink\u00edn"
        }, {
            "idmunicipio": "17",
            "municipio": "Chankom"
        }, {
            "idmunicipio": "18",
            "municipio": "Chapab"
        }, {
            "idmunicipio": "19",
            "municipio": "Chemax"
        }, {
            "idmunicipio": "20",
            "municipio": "Chicxulub Pueblo"
        }, {
            "idmunicipio": "21",
            "municipio": "Chichimil\u00e1"
        }, {
            "idmunicipio": "22",
            "municipio": "Chikindzonot"
        }, {
            "idmunicipio": "23",
            "municipio": "Chochol\u00e1"
        }, {
            "idmunicipio": "24",
            "municipio": "Chumayel"
        }, {
            "idmunicipio": "25",
            "municipio": "Dzan"
        }, {
            "idmunicipio": "26",
            "municipio": "Dzemul"
        }, {
            "idmunicipio": "27",
            "municipio": "Dzidzant\u00fan"
        }, {
            "idmunicipio": "28",
            "municipio": "Dzilam de Bravo"
        }, {
            "idmunicipio": "29",
            "municipio": "Dzilam Gonz\u00e1lez"
        }, {
            "idmunicipio": "30",
            "municipio": "Dzit\u00e1s"
        }, {
            "idmunicipio": "31",
            "municipio": "Dzoncauich"
        }, {
            "idmunicipio": "32",
            "municipio": "Espita"
        }, {
            "idmunicipio": "33",
            "municipio": "Halach\u00f3"
        }, {
            "idmunicipio": "34",
            "municipio": "Hocab\u00e1"
        }, {
            "idmunicipio": "35",
            "municipio": "Hoct\u00fan"
        }, {
            "idmunicipio": "36",
            "municipio": "Hom\u00fan"
        }, {
            "idmunicipio": "37",
            "municipio": "Huh\u00ed"
        }, {
            "idmunicipio": "38",
            "municipio": "Hunucm\u00e1"
        }, {
            "idmunicipio": "39",
            "municipio": "Ixil"
        }, {
            "idmunicipio": "40",
            "municipio": "Izamal"
        }, {
            "idmunicipio": "41",
            "municipio": "Kanas\u00edn"
        }, {
            "idmunicipio": "42",
            "municipio": "Kantunil"
        }, {
            "idmunicipio": "43",
            "municipio": "Kaua"
        }, {
            "idmunicipio": "44",
            "municipio": "Kinchil"
        }, {
            "idmunicipio": "45",
            "municipio": "Kopom\u00e1"
        }, {
            "idmunicipio": "46",
            "municipio": "Mama"
        }, {
            "idmunicipio": "47",
            "municipio": "Man\u00ed"
        }, {
            "idmunicipio": "48",
            "municipio": "Maxcan\u00fa"
        }, {
            "idmunicipio": "49",
            "municipio": "Mayap\u00e1n"
        }, {
            "idmunicipio": "50",
            "municipio": "M\u00e9rida"
        }, {
            "idmunicipio": "51",
            "municipio": "Mococh\u00e1"
        }, {
            "idmunicipio": "52",
            "municipio": "Motul"
        }, {
            "idmunicipio": "53",
            "municipio": "Muna"
        }, {
            "idmunicipio": "54",
            "municipio": "Muxupip"
        }, {
            "idmunicipio": "55",
            "municipio": "Opich\u00e9n"
        }, {
            "idmunicipio": "56",
            "municipio": "Oxkutzcab"
        }, {
            "idmunicipio": "57",
            "municipio": "Panab\u00e1"
        }, {
            "idmunicipio": "58",
            "municipio": "Peto"
        }, {
            "idmunicipio": "59",
            "municipio": "Progreso"
        }, {
            "idmunicipio": "60",
            "municipio": "Quintana Roo"
        }, {
            "idmunicipio": "61",
            "municipio": "R\u00edo Lagartos"
        }, {
            "idmunicipio": "62",
            "municipio": "Sacalum"
        }, {
            "idmunicipio": "63",
            "municipio": "Samahil"
        }, {
            "idmunicipio": "64",
            "municipio": "Sanahcat"
        }, {
            "idmunicipio": "65",
            "municipio": "San Felipe"
        }, {
            "idmunicipio": "66",
            "municipio": "Santa Elena"
        }, {
            "idmunicipio": "67",
            "municipio": "Sey\u00e9"
        }, {
            "idmunicipio": "68",
            "municipio": "Sinanch\u00e9"
        }, {
            "idmunicipio": "69",
            "municipio": "Sotuta"
        }, {
            "idmunicipio": "70",
            "municipio": "Sucil\u00e1"
        }, {
            "idmunicipio": "71",
            "municipio": "Sudzal"
        }, {
            "idmunicipio": "72",
            "municipio": "Suma de Hidalgo"
        }, {
            "idmunicipio": "73",
            "municipio": "Tahdzi\u00fa"
        }, {
            "idmunicipio": "74",
            "municipio": "Tahmek"
        }, {
            "idmunicipio": "75",
            "municipio": "Teabo"
        }, {
            "idmunicipio": "76",
            "municipio": "Tecoh"
        }, {
            "idmunicipio": "77",
            "municipio": "Tekal de Venegas"
        }, {
            "idmunicipio": "78",
            "municipio": "Tekant\u00f3"
        }, {
            "idmunicipio": "79",
            "municipio": "Tekax"
        }, {
            "idmunicipio": "80",
            "municipio": "Tekit"
        }, {
            "idmunicipio": "81",
            "municipio": "Tekom"
        }, {
            "idmunicipio": "82",
            "municipio": "Telchac Pueblo"
        }, {
            "idmunicipio": "83",
            "municipio": "Telchac Puerto"
        }, {
            "idmunicipio": "84",
            "municipio": "Temax"
        }, {
            "idmunicipio": "85",
            "municipio": "Temoz\u00f3n"
        }, {
            "idmunicipio": "86",
            "municipio": "Tepak\u00e1n"
        }, {
            "idmunicipio": "87",
            "municipio": "Tetiz"
        }, {
            "idmunicipio": "88",
            "municipio": "Teya"
        }, {
            "idmunicipio": "89",
            "municipio": "Ticul"
        }, {
            "idmunicipio": "90",
            "municipio": "Timucuy"
        }, {
            "idmunicipio": "91",
            "municipio": "Tinum"
        }, {
            "idmunicipio": "92",
            "municipio": "Tixcacalcupul"
        }, {
            "idmunicipio": "93",
            "municipio": "Tixkokob"
        }, {
            "idmunicipio": "94",
            "municipio": "Tixm\u00e9huac"
        }, {
            "idmunicipio": "95",
            "municipio": "Tizim\u00edn"
        }, {
            "idmunicipio": "96",
            "municipio": "Tunk\u00e1s"
        }, {
            "idmunicipio": "97",
            "municipio": "Tzucacab"
        }, {
            "idmunicipio": "98",
            "municipio": "Uayma"
        }, {
            "idmunicipio": "99",
            "municipio": "Uc\u00fa"
        }, {
            "idmunicipio": "100",
            "municipio": "Um\u00e1n"
        }, {
            "idmunicipio": "101",
            "municipio": "Valladolid"
        }, {
            "idmunicipio": "102",
            "municipio": "Xocchel"
        }, {
            "idmunicipio": "103",
            "municipio": "Yaxcab\u00e1"
        }, {
            "idmunicipio": "104",
            "municipio": "Yaxkukul"
        }, {
            "idmunicipio": "105",
            "municipio": "Yoba\u00edn"
        }, {
            "idmunicipio": "106",
            "municipio": "Tixp\u00e9hual"
        }];
    
  

    }]);


//sección de Politíca y Gobierno
app.controller('seccionPolitica', ['$scope', '$http', function ($scope, $http) {

        $scope.gobierno = {};
        $http.get('./php/consultaSintesisSeccGob.php').success(function (arrayGobierno) {
            $scope.gobierno = arrayGobierno;

            var cont = 5;
            $scope.totalNoticias = $scope.gobierno.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.gobierno.length > $scope.posicion) {
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

    }]);


//sección Policía
app.controller('seccionPolicia', ['$scope', '$http', function ($scope, $http) {
        $scope.policiaca = {};
        $http.get('./php/consultaSintesisSeccPolicia.php').success(function (arrayPoliciaca) {
            $scope.policiaca = arrayPoliciaca;

            var cont = 5;
            $scope.totalNoticias = $scope.policiaca.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.policiaca.length > $scope.posicion) {
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
    }]);

//sección Deportes
app.controller('seccionDeportes', ['$scope', '$http', function ($scope, $http) {

        $scope.deportivas = {};
        $http.get('./php/consultaSintesisSeccDeportes.php').success(function (arrayDeportes) {
            $scope.deportivas = arrayDeportes;

            var cont = 5;
            $scope.totalNoticias = $scope.deportivas.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.deportivas.length > $scope.posicion) {
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

    }]);


//sección Espectáculos
app.controller('seccionEspectaculos', ['$scope', '$http', function ($scope, $http) {
        $scope.espectaculos = {};
        $http.get('./php/consultaSintesisSeccEspectaculos.php').success(function (arrayEspectaculos) {
            $scope.espectaculos = arrayEspectaculos;

            var cont = 5;
            $scope.totalNoticias = $scope.espectaculos.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.espectaculos.length > $scope.posicion) {
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
    }]);


//sección videos
app.controller('seccionVideos', ['$scope', '$http', function ($scope, $http) {
        $scope.seccVideos = {};
        $http.get('./php/consultaSeccionVideos.php').success(function (arrayVideos) {
            $scope.seccVideos = arrayVideos;

            var cont = 3;
            $scope.totalNoticias = $scope.seccVideos.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.seccVideos.length > $scope.posicion) {
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
    }]);


//sección Publicidad
app.controller('seccionPublicidad', ['$scope', '$http', function ($scope, $http) {
        $scope.publicidad = {};
        $http.get('./php/consultaSeccionPublicidad.php').success(function (arrayPublicidad) {
            $scope.publicidad = arrayPublicidad;

            var cont = 3;
            $scope.totalNoticias = $scope.publicidad.length;

            $scope.posicion = cont;

            $scope.siguientes = function () {
                if ($scope.publicidad.length > $scope.posicion) {
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
    }]);




   