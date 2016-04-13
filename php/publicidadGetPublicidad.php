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

//echo "El codigo es:  " . $codigo;



$query = "SELECT fecha,titulo,banner,contenido FROM banners WHERE idBanners ='$codigo'";


$result = mysql_query($query);





//$arrayPublico = array();

while ($row = mysql_fetch_array($result)) {
    $publico = new stdClass();
    $publico->banner = $row["banner"];
    $publico->fecha = $row["fecha"];
    $publico->titulo = utf8_encode($row["titulo"]);
    $publico->contenido = utf8_encode($row["contenido"]);


//     $arrayPublico = $publico;
}


# JSON-encode the response
echo $json_response = json_encode($publico);
?>