
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias, imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 3 ORDER BY fecha DESC
';

$result = mysql_query($query);

$arrayGobierno = array();

while ($row = mysql_fetch_array($result)) {
    $gobierno = new stdClass();
    $gobierno->id = $row["idNoticias"];
    $gobierno->imagen = $row["imagen"];
    $gobierno->title = utf8_encode($row["titulo"]);
    $gobierno->fecha = $row["fecha"];
    $gobierno->sintesis = utf8_encode($row["sintesis"]);
    
    $arrayGobierno[] = $gobierno;
}

# JSON-encode the response
echo $json_response = json_encode($arrayGobierno);

