<?php

define("ERROR", "Errore Parametri");
define("ERROR_DB", "Errore Database");
define("DATABASE", "localhost");
//define("DATABASE", "localhost:3306");
define("USERNAME", "root");
define("PASSWORD", "");

try {
    $db = new mysqli(DATABASE, USERNAME, PASSWORD);
} catch (Exception $e) {
    echo ERROR_DB;
    return;
}

if (!isset($_GET["A"]) || !isset($_GET["B"]) || !isset($_GET["O"])) {
    echo ERROR;
    return;
}

$a = $_GET["A"];
$b = $_GET["B"];
$o = $_GET["O"]; 

if (!is_numeric($a) || !is_numeric($b) || $a <= 0 || $b <= 0) {
// TODO
    echo ERROR;
    return;
}

if ($o != 'i' && $o != 'u') {
    echo ERROR;
    return;
}

if ($db->connection_error) {
    echo ERROR_DB;
    return;
}

echo "OK";

function getResult($query) {
    return $db->query($query);
}

?>
