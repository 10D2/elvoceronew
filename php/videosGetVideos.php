<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

//Verificar que venga el parametro.
if (!isset($_GET['v'])) {
    echo $error = "Falta el codigo";
    die;
}

//Desinfectar el Parametro.
$video = $_GET['v'];




$query = "SELECT id,url FROM videos WHERE idVideos ='$video'";



$result = mysql_query($query);

$arraySeccVideos = array();

while ($row = mysql_fetch_array($result)) {
    $videos = new stdClass();
    $videos->id = $row["id"];
    $videos->url = $row["url"];


    $arraySeccVideos[] = $videos;
}

# JSON-encode the response
echo $json_response = json_encode($videos);

