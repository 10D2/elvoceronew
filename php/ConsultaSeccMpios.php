
<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();
//$query = 'SELECT idNoticias, imagen,titulo,fecha,sintesis FROM noticias WHERE idMenus > 1000 ORDER BY fecha DESC';
$query = 'SELECT n.idNoticias, n.imagen, n.titulo, n.fecha, n.sintesis, mm.menus FROM noticias n INNER JOIN menusmunicipios mm ON mm.idMenus = n.idMenus ORDER BY fecha DESC';
$result = mysql_query($query);

$arraySeccMupios = array();

while ($row = mysql_fetch_array($result)) {
    $mpios = new stdClass();
    $mpios->id = $row["idNoticias"];
    $mpios->imagen = $row["imagen"];
    $mpios->title = utf8_encode($row["titulo"]);
    $mpios->fecha = $row["fecha"];
    $mpios->menus = utf8_encode($row["menus"]);
    $mpios->sintesis = utf8_encode($row["sintesis"]);

    $arraySeccMupios[] = $mpios;
}

# JSON-encode the response
echo $json_response = json_encode($arraySeccMupios);

