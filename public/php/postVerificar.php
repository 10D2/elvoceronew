<?php

session_start();
header("Content-Type: text/html; charset=UTF-8");
mysql_query("SET NAMES 'utf8'");
mysql_query('SET CHARACTER SET utf8');

include_once '../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();



$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$respuesta = array(
    'err' => true,
    'mensaje' => 'Usuario/Contraseña incorrectos',
);


// ================================================
//   Encriptar la contraseña maestra (UNICA VEZ)
// ================================================
//encriptar_usuario();




if (isset($request['usuario']) && isset($request['contrasena'])) { // ACTUALIZAR
    $user = addslashes($request['usuario']);
    $pass = addslashes($request['contrasena']);

    $user = strtoupper($user);


    // Verificar que el usuario exista
    $sql = "SELECT count(*) as existe FROM usuarios where codigo = '$user'";
    // $existe = Database::get_valor_query($sql, 'existe');
//
//    while ($row = mysql_fetch_array($result)) {
//        $existe = $row["acceso"];
//    }

     $existe = 1;
    if ($existe == 1) {

        $sql = "SELECT contrasena FROM usuarios where codigo = '$user' ";

//        while ($row = mysql_fetch_array($result)) {
//            $contrasena = $row["contrasena"];
//            $codigo = $row["codigo"];
//        }


        // $data_pass = Database::get_valor_query($sql, 'contrasena');
         $data_pass = "pcoriente";
        // Encriptar usando el mismo metodo
        // $pass = Database::uncrypt( $pass, $data_pass );
        // Verificar que sean iguales las contraseñas
        if ($data_pass == $pass) {

            $respuesta = array(
                'err' => false,
                'mensaje' => 'Login valido',
                'url' => '../voc/administracion/index.php',
            );

            $_SESSION['user'] = $user;

            // actualizar ultimo acceso
            $sql = "UPDATE usuarios set ultimoacceso = NOW() where codigo = '$user'";

            if (mysql_query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: ";
            }

            // Database::ejecutar_idu($sql);
        }
    }
}

//sleep(5);
echo json_encode($respuesta);





// Esto se puede borrar despues
// ================================================
//   Funcion para Encriptar
// ================================================
// function encriptar_usuario(){
// 	$usuario_id = '1';
// 	$contrasena = '123456';
// 	$contrasena_crypt = Database::crypt( $contrasena );
// 	$sql = "UPDATE usuarios set contrasena = '$contrasena_crypt' where id = '$usuario_id'";
// 	Database::ejecutar_idu($sql);
// }
?>