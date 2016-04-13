<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias,imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 6 ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arraySeccEspec = array();

while ($row = mysql_fetch_array($result)) {
    $espec = new stdClass();
    $espec->id = $row["idNoticias"];
    $espec->imagen = $row["imagen"];
    $espec->title = utf8_encode($row["titulo"]);
    $espec->fecha = $row["fecha"];
    $espec->sintesis = utf8_encode($row["sintesis"]);
    
    $arraySeccEspec[] = $espec;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccEspec);

