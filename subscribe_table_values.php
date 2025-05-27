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
    $subsemail = $_POST['subscribeemail'];
}



$sql = "INSERT INTO subscribe_table (subscribed_email) VALUES ('$subsemail');";


if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/login.html");
    exit();
}


 else {
    echo "Error: " . mysqli_error($conn);
}


mysqli_close($conn);
?>