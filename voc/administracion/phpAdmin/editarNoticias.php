<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$file = $_FILES["file"]["name"];
//$postdata = file_get_contents("php://input");
$datos = $_POST["name"];

//$request = json_decode($postdata);
$request = json_decode($datos);
$request =  (array) $request;

$tituloC=  utf8_decode($request['titulo']);
$contenidoC= utf8_decode($request['contenido']);
$fechaC = $request['fecha'];
$sintesisC= utf8_decode($request['sintesis']);
$idmunicipioC = $request['idmunicipio'];
$idMenusC = $request['idMenus'];
$pieC= utf8_decode($request['pie']);
$idNoticias= $request['idNoticias'];

if (!is_dir("../../images/"))
    mkdir("../../images/", 0777);

if ($file && move_uploaded_file($_FILES["file"]["tmp_name"], "../../images/" . $file)) {
    echo $file;
}

$ruta= "images/" . $file;


echo $tituloC;
echo $fechaC;
echo $sintesisC;
echo $contenidoC;
echo $pieC;

$request['titulo'] = strtoupper($request['titulo']);


$sql= "UPDATE noticias SET titulo = '$tituloC', imagen = '$ruta' ,contenido = '$contenidoC', fecha = '$fechaC', sintesis = '$sintesisC', idmunicipio = '$idmunicipioC', idMenus = '$idMenusC', pie = '$pieC' WHERE idNoticias = $idNoticias";

if (mysql_query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: ";
}

?>