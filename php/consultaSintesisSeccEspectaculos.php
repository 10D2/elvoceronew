
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias, imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 6 ORDER BY fecha DESC
';

$result = mysql_query($query);

$arrayEspectaculos = array();

while ($row = mysql_fetch_array($result)) {
    $espectaculos = new stdClass();
    $espectaculos->id = $row["idNoticias"];
    $espectaculos->imagen = $row["imagen"];
    $espectaculos->title = utf8_encode($row["titulo"]);
    $espectaculos->fecha = $row["fecha"];
    $espectaculos->sintesis = utf8_encode($row["sintesis"]);
    
    $arrayEspectaculos[] = $espectaculos;
}

# JSON-encode the response
echo $json_response = json_encode($arrayEspectaculos);

