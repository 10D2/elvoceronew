
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idVideos,id,comentario FROM videos ORDER BY idVideos DESC
';

$result = mysql_query($query);

$arrayTablaVideos = array();

while ($row = mysql_fetch_array($result)) {
    $tablaVideos = new stdClass();
    $tablaVideos->idVideos = $row["idVideos"];
    $tablaVideos->id = $row["id"];
    $tablaVideos->comentario = utf8_encode($row["comentario"]);
    
    $arrayTablaVideos[] = $tablaVideos;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaVideos);

