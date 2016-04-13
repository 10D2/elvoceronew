<?php
/**
 * Description of conexion
 *
 * @author david
 */
class conexion {
    function Conectarse() {
        if (!($link = mysql_connect("localhost", "root", ""))) {
            
            echo "Error conectando a la base de datos.";
            exit();
        }
        if (!mysql_select_db("elvocero", $link)) {
//            mysql_query('SET NAMES \'utf8\'');
            echo "NOO SELECCIONO LA BASE DE DATOS";
            exit();
        }
      //  mysql_query("SET NAMES 'utf8'");
        return $link;
    }          
    function cerrarBd() {
        mysql_close();
    }
    
    
//    function Conectarse() {
//        if (!($link = mysql_connect("localhost", "elvocero", "Oriente65"))) {
//            echo "Error conectando a la base de datos.";
//            exit();
//        }
//        if (!mysql_select_db("elvocero", $link)) {
//            echo "NOO SELECCIONO LA BASE DE DATOS";
//            exit();
//        }
//        return $link;
//    }
//
//    function cerrarBd() {
//        mysql_close();
//    }
//    

//    
}


