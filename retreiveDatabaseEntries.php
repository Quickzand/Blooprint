<?php
$servername = "mysql.matthewsand.info";
$username = "wifi_panda_joe";
$password = "wifi_panda_12";

$conn = new mysqli($servername, $username, $password, "wifi_panda");

if (!$result = mysqli_query($conn, "SELECT * FROM hotspots")) {
    printf("Error: %s\n", $mysqli->error);
    exit;
}

//$result = $conn->query("USE wifi_panda; select * from hotspots;") or die(mysqli_error()) ;
// echo $result;
$result = mysqli_query($conn, "SHOW TABLES");
// $rows = array();
//   while ($r = $result->fetch_assoc()) {
//       $rows['object_name'][] = $r;
//   }
//
// echo json_encode($rows);
// //echo "am here";
