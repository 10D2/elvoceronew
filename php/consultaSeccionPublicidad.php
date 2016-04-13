<?php
include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();



$query = 'SELECT idBanners, banner, fecha, titulo, idMenus, contenido FROM `banners` ORDER BY idBanners DESC ';

$result = mysql_query($query);

$arrayPublicidad = array();

while ($row = mysql_fetch_array($result)) {
    $publicidad = new stdClass();
    $publicidad->idBanners = $row["idBanners"];
    $publicidad->banner = $row["banner"];
    $publicidad->fecha = $row["fecha"];
    $publicidad->titulo = utf8_encode($row["titulo"]);
    
    $arrayPublicidad[] = $publicidad;
}

# JSON-encode the response
echo $json_response = json_encode($arrayPublicidad);

