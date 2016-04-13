
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idNoticias,titulo,fecha,imagen FROM noticias ORDER BY idNoticias DESC';

$result = mysql_query($query);

$arrayTablaNotas = array();

while ($row = mysql_fetch_array($result)) {
    $tablaNota = new stdClass();
    $tablaNota->idNoticias = $row["idNoticias"];
    $tablaNota->imagen = $row["imagen"];
    $tablaNota->titulo = utf8_encode($row["titulo"]);
    $tablaNota->fecha = $row["fecha"];
    
    $arrayTablaNotas[] = $tablaNota;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaNotas);

