<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
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

$query = "SELECT idImagen,idNoticias,rutas FROM imagenes WHERE idNoticias ='$codigo'";

$result = mysql_query($query);

$arrayImagenes = array();

while ($row = mysql_fetch_array($result)) {
    $imagenes = new stdClass();
    $imagenes->id = $row["idImagen"];
    $imagenes->idNoticias = $row["idNoticias"];
    $imagenes->rutas = $row["rutas"];
    
    $arrayImagenes[] = $imagenes;
    
}

echo $json_response = json_encode($arrayImagenes);
?>