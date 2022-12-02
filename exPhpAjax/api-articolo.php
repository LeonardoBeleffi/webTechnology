<?php
require("bootstrap.php");
$articoli = $dbh->getPost(2);

echo json_encode($articoli);


