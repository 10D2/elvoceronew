
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

$query = "SELECT idNoticias,titulo,imagen,contenido,fecha,sintesis,pie,idmunicipio,idMenus,imagen FROM noticias WHERE idNoticias ='$codigo'";

$result = mysql_query($query);


while ($row = mysql_fetch_array($result)) {
    $formNota = new stdClass();
    $formNota->idNoticias = $row["idNoticias"];
    $formNota->titulo = utf8_encode($row["titulo"]);
    $formNota->imagenes = $row["imagen"];
    $formNota->contenido = utf8_encode($row["contenido"]);
    $formNota->fecha = $row["fecha"];
    $formNota->sintesis = utf8_encode($row["sintesis"]);
    $formNota->idmunicipio = $row["idmunicipio"];
    $formNota->idMenus = $row["idMenus"];
    $formNota->pie = utf8_encode($row["pie"]);
//    $formNota->imagen = $row["imagen"];
//    $formNota->images =  array();
//    $sql ="SELECT * FROM imagenes WHERE idNoticias = '".$formNota->idNoticias."'";
//    $datosImagenes = mysql_query($sql);
//    if($datosImagenes == false){
//        echo mysql_error();
//    }
//    else{
//        while($rs = mysql_fetch_array($datosImagenes)){
//            $imagenes = new stdClass();
//            $imagenes->id = $rs["idImagen"];
//            $imagenes->idNotica = $rs["idNoticias"];
//            $imagenes->ruta = $rs["rutas"];
//            $formNota->images[]= $imagenes;
//        }
//    }
}

echo $json_response = json_encode($formNota);
?>