<?php
$servername = "mysql.matthewsand.info";
$username = "wifi_panda_joe";
$password = "wifi_panda_12";

$mysqli = new mysqli($servername, $username, $password, "wifi_panda");

$query = "SELECT * FROM hotspots;";
$result = $mysqli -> query($query);

$outputJSON = '{"hotspots":[';
while ($row=mysqli_fetch_row($result)) {
    $outputJSON .= '{"id":"'.$row[0].'","locationName":"'.$row[1].'","lat":"'.$row[2].'","long":"'.$row[3].'","email":"'.$row[4].'","phone":"'.$row[5].'","website":"'.$row[6].'"},';
}
$finalOutput = rtrim($outputJSON, ", ");
$finalOutput .= ']}';
echo $finalOutput ;
