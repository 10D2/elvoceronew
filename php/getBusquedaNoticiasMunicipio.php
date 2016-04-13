<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

//Verificar que venga el parametro.
if (!isset($_GET['m'])) {
    echo $error = "Falta el codigo";
    die;
}

//Desinfectar el Parametro.
$municipio = $_GET['m'];



$query = "SELECT n.idNoticias,n.titulo,n.fecha,n.imagen,n.sintesis, m.municipio, mm.menus FROM noticias n INNER JOIN municipios m ON m.idmunicipio = n.idmunicipio INNER JOIN menusmunicipios mm ON mm.idMenus = n.idMenus where n.idmunicipio = '$municipio' ORDER BY fecha DESC";


$result = mysql_query($query);

$arrayBusqueda = array();

while ($row = mysql_fetch_array($result)) {
    $busqueda = new stdClass();
    $busqueda->id = $row["idNoticias"];
    $busqueda->imagen = $row["imagen"];
    $busqueda->titulo = utf8_encode($row["titulo"]);
    $busqueda->fecha = $row["fecha"];
    $busqueda->sintesis = utf8_encode($row["sintesis"]);
    $busqueda->menus = utf8_encode($row["menus"]);
    $busqueda->municipio = utf8_encode($row["municipio"]);
    

    $arrayBusqueda[] = $busqueda;
}

# JSON-encode the response
echo  json_encode( $arrayBusqueda);

