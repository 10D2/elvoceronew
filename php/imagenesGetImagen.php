<?php

// Incluir la clase de base de datos
include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

// Verificar que venga el parametro
if (!isset($_GET['i'])) {
    echo $error = "Falta el codigo";
    die;
}

// Desinfectar el parametro
$codigo = $_GET['i'];

$query1 = "SELECT rutas FROM imagenes WHERE idNoticias='$codigo'";

$result1 = mysql_query($query1);

$arraySlider = array();

while ($row = mysql_fetch_array($result1)) {
    $slider = new stdClass();
    $slider->rutas = $row["rutas"];
    
    $arraySlider[] = $slider;
}

echo $json_response = json_encode($arraySlider);
?>