<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias,imagen,titulo,fecha,sintesis FROM noticias WHERE publicacion=1 AND idMenus = 3 ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arraySeccGob = array();

while ($row = mysql_fetch_array($result)) {
    $politica = new stdClass();
    $politica->id = $row["idNoticias"];
    $politica->imagen = $row["imagen"];
    $politica->title = utf8_encode($row["titulo"]);
    $politica->fecha = $row["fecha"];
    $politica->sintesis = utf8_encode($row["sintesis"]);
    
    $arraySeccGob[] = $politica;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccGob);

