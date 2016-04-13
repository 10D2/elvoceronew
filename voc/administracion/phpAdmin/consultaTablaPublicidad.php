<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idBanners,titulo,banner,contenido, fecha FROM `banners` ORDER BY idBanners DESC
';

$result = mysql_query($query);

$arrayTablaPublicidad = array();

while ($row = mysql_fetch_array($result)) {
    $tablaPublicidad = new stdClass();
    $tablaPublicidad->idBanners = $row["idBanners"];
    $tablaPublicidad->titulo = utf8_encode($row["titulo"]);
    $tablaPublicidad->banner = $row["banner"];
    $tablaPublicidad->contenido = utf8_encode($row["contenido"]);
    $tablaPublicidad->fecha = $row["fecha"];
    
    $arrayTablaPublicidad[] = $tablaPublicidad;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaPublicidad);

