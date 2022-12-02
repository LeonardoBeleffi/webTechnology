<?php

define("ERROR", "Errore Parametri");
define("ERROR_DB", "Errore Database");
define("DATABASE", "localhost");
//define("DATABASE", "localhost:3306");
define("USERNAME", "root");
define("PASSWORD", "");
define("DB_NAME", "giugno");

$a = $_GET["A"];
$b = $_GET["B"];
$o = $_GET["O"]; 
$id = 0;
$set = 0;
$resultSet = array();
$vecA = array();
$vecB = array();

try {
    $db = new mysqli(DATABASE, USERNAME, PASSWORD, DB_NAME);
    $result = getResult("SELECT * FROM insiemi ORDER BY id;");

    while ($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $set = $row["insieme"];

        if ($set == $a) {
            $vecA[count($vecA)] = $row["valore"];
        }
        if ($set == $b) {
            $vecB[count($vecB)] = $row["valore"];
        }
        $id++;
    }
    $set++;

} catch (Exception $e) {
    echo ERROR_DB;
    return;
}

if (!areNumberParametersValid()) {
    echo ERROR;
    return;
}

if (!isLiteralParameterValid()) {
    echo ERROR;
    return;
}

if ($o === 'i') {
    $resultSet = array_intersect($vecA, $vecB);
} else {
    $resultSet = array_unique(array_merge($vecA, $vecB));
}

if (!insertSet()) {
    echo ERROR_DB;
    return;
}

echo "Success.";

$db->close();

function areNumberParametersValid() {
    global $a, $b, $vecA, $vecB;
    return isset($a) && isset($b) && is_numeric($a) && is_numeric($b) && $a > 0 && $b > 0 && count($vecA) > 0 && count($vecB) > 0;
}

function isLiteralParameterValid() {
    global $o;
    return isset($o) && ($o == 'i' || $o == 'u');
}

function getResult($query) {
    global $db;
    return $db->query($query);
}

function insertSet() {
    global $db, $id, $set, $resultSet;
    $status = false;
    try {
        $query = "";
        foreach ($resultSet as $val) {
            $query .= "INSERT INTO insiemi (id, valore, insieme) VALUES ('$id', '$val', '$set');";
            $id++;
        }
        echo $query;
        $status = $db->query($query);
    } finally {
        return $status; 
    }
}

?>
