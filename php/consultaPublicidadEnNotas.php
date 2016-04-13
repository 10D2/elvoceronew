<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idBanners, banner FROM banners ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arrayPublicidadNotas = array();

while ($row = mysql_fetch_array($result)) {
    $publicidadNotas = new stdClass();
    $publicidadNotas->banner = $row["banner"];
    $publicidadNotas->idBanners = $row["idBanners"];
    
    $arrayPublicidadNotas[] = $publicidadNotas;
}

# JSON-encode the response
echo $json_response = json_encode($arrayPublicidadNotas);

