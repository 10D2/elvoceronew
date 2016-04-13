<?php
header("Content-Type: text/html; charset=UTF-8");
mysql_query("SET NAMES 'utf8'"); 
mysql_query('SET CHARACTER SET utf8');

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$file = $_FILES["file"]["name"];
$datos = $_POST["name"];

$request = json_decode($datos);
$request = (array) $request;

$tituloC=  utf8_decode($request['titulo']);
$contenidoC= utf8_decode($request['contenido']);
$fechaC = $request['date'];
$sintesisC= utf8_decode($request['sintesis']);
$idmunicipioC = $request['idmunicipio'];
$idMenusC = $request['idMenus'];
$pieC= utf8_decode($request['pie']);

$request['titulo'] = strtoupper($request['titulo']);

if (!is_dir("./../../../images/"))
    mkdir("./../../../images/", 0777);

if ($file && move_uploaded_file($_FILES["file"]["tmp_name"], "./../../../images/" . $file)) {
    echo $file;
}

$ruta= "images/" . $file;

$sql = "INSERT INTO noticias (titulo, imagen, contenido, slider, fecha, publicacion, posicion, sintesis, idmunicipio, idMenus, pie) VALUES ('$tituloC', '$ruta', '$contenidoC', '0', '$fechaC', '1', '0', '$sintesisC', '$idmunicipioC', '$idMenusC', '$pieC')";



if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
