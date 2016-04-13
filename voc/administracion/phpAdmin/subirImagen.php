<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$idNoticias = $_GET["id"];

$file = $_FILES["file"]["name"];


if (!is_dir("./../../../images/"))
    mkdir("./../../../images/", 0777);

if ($file && move_uploaded_file($_FILES["file"]["tmp_name"], "./../../../images/" . $file)) {
    echo $file;
}



$bannerC= "images/" . $file;

$sql = "INSERT INTO imagenes (idNoticias, rutas) VALUES ('$idNoticias', '$bannerC')";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}