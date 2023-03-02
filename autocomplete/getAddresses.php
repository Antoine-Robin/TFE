<?php

$code = $_GET['code'];

$servername = "localhost";
$username = "root";
$password = "root";

try {
  $conn = new PDO("mysql:host=$servername;dbname=efp-autocomplete", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
}

try {
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM locus WHERE zip LIKE '" . $code . "%'" );
    $stmt->execute();
} catch (PDOException $e) {
    echo $e->getMessage();
}
$result = $stmt->fetchAll();

header('Content-Type: application/json');
echo json_encode($result);



?>