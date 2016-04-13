<?php

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT * from menus';

$result = mysql_query($query);

$distribuidora = array();

while ($row = mysql_fetch_array($result)) {
    $menus = new stdClass();
    $menus->idMenus = $row["idMenus"];
    $menus->menus = utf8_encode($row["menus"]);
    
    $distribuidora[] = $menus;
}

# JSON-encode the response
echo $json_response = json_encode($distribuidora);

