<?php

$a = $_GET["A"];
$b = $_GET["B"];
$o = $_GET["O"]; 

if (!isset($a) || !isset($b) || !isset($o)) {
    return;
}
echo "A: " . $a . ", B: " . $b . ", O: " . $o .".";

?>
