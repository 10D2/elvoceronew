
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias, imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 4 ORDER BY fecha DESC
';

$result = mysql_query($query);

$arrayPoliciaca = array();

while ($row = mysql_fetch_array($result)) {
    $policiaca = new stdClass();
    $policiaca->id = $row["idNoticias"];
    $policiaca->imagen = $row["imagen"];
    $policiaca->title = utf8_encode($row["titulo"]);
    $policiaca->fecha = $row["fecha"];
    $policiaca->sintesis = utf8_encode($row["sintesis"]);
    
    $arrayPoliciaca[] = $policiaca;
}

# JSON-encode the response
echo $json_response = json_encode($arrayPoliciaca);

