<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();


$query = 'SELECT idVideos,url,id,comentario FROM videos ORDER BY idVideos DESC ';

$result = mysql_query($query);

$arrayVideos = array();

while ($row = mysql_fetch_array($result)) {
    $seccVideos = new stdClass();
    $seccVideos->idVideos = $row["idVideos"];
    $seccVideos->url = $row["url"];
    $seccVideos->id = $row["id"];
    $seccVideos->comentario = utf8_encode($row["comentario"]);
    
    $arrayVideos[] = $seccVideos;
}

# JSON-encode the response
echo $json_response = json_encode($arrayVideos);

