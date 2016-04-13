
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$file = $_FILES["file"]["name"];
$datos = $_POST["name"];



$request = json_decode($datos);
$request = (array) $request;

$tituloC=  utf8_decode($request['titulo']);
$contenidoC= utf8_decode($request['contenido']) ;
$fechaC = $request['date'];


$request['titulo'] = strtoupper($request['titulo']);

if (!is_dir("./../../../images/"))
    mkdir("./../../../images/", 0777);

if ($file && move_uploaded_file($_FILES["file"]["tmp_name"], "./../../../images/" . $file)) {
    echo $file;
}

$bannerC= "images/" . $file;

$sql = "INSERT INTO banners (titulo, banner, fecha, idMenus, contenido) VALUES ('$tituloC', '$bannerC', '$fechaC', '4', '$contenidoC')";



if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}