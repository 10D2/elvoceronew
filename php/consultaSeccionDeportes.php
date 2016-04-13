
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias,imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus = 5 ORDER BY fecha DESC LIMIT 3
';

$result = mysql_query($query);

$arraySeccDeportes = array();

while ($row = mysql_fetch_array($result)) {
    $deportes = new stdClass();
    $deportes->id = $row["idNoticias"];
    $deportes->imagen = $row["imagen"];
    $deportes->title = utf8_encode($row["titulo"]);
    $deportes->fecha = $row["fecha"];
    $deportes->sintesis = utf8_encode($row["sintesis"]);
    
    $arraySeccDeportes[] = $deportes;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccDeportes);

