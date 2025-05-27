<?php
$dbhost = 'localhost';  
$dbuser = 'root';       
$dbpass = '';           
$dbname = "hybrid_heaven_contact";       


$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $a = $_POST['notifyemail'];
}


$sql = "INSERT INTO notify_table (notify_email) VALUES ('$a')";

if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/Hybrid_Heaven_Offers.html");
    exit();
}


 else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>