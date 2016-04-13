<?php

// Incluir la clase de base de datos
include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
    echo $error = "Falta el codigo";
    die;
}

// Desinfectar el parametro
$codigo = $_GET['c'];

$query = "SELECT idNoticias, fecha, titulo, imagen, pie, contenido FROM noticias WHERE idNoticias ='$codigo'";

$result = mysql_query($query);


while ($row = mysql_fetch_array($result)) {
    $nota = new stdClass();
    $nota->id = $row["idNoticias"];
    $nota->imagen = $row["imagen"];
    $nota->title = utf8_encode($row["titulo"]);
    $nota->fecha = $row["fecha"];
    $nota->contenido = utf8_encode($row["contenido"]);
    $nota->pie = utf8_encode($row["pie"]);
}

echo $json_response = json_encode($nota);
?>