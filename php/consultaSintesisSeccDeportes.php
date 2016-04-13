
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias, imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 5 ORDER BY fecha DESC
';

$result = mysql_query($query);

$arrayDeportes = array();

while ($row = mysql_fetch_array($result)) {
    $deportivas = new stdClass();
    $deportivas->id = $row["idNoticias"];
    $deportivas->imagen = $row["imagen"];
    $deportivas->title = utf8_encode($row["titulo"]);
    $deportivas->fecha = $row["fecha"];
    $deportivas->sintesis = utf8_encode($row["sintesis"]);
    
    $arrayDeportes[] = $deportivas;
}

# JSON-encode the response
echo $json_response = json_encode($arrayDeportes);

