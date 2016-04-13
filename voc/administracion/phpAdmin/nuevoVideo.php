

<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$urlC=$request['url'];
$idC= $request['id'];
$comentarioC = utf8_decode($request['comentario']);

$request['titulo'] = strtoupper($request['titulo']);


$sql = "INSERT INTO videos ( url, id, comentario) VALUES ('$urlC', '$idC', '$comentarioC')";


if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>