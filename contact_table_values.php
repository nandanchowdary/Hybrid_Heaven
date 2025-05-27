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
    $a = $_POST['contactname'];
    $b = $_POST['contactemail'];
    $c = $_POST['contactmessage'];
}


$sql = "INSERT INTO contact_table (contact_fullname,contact_email,contact_message) VALUES ('$a','$b','$c')";

if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/Hybrid_Heaven_Contact.html");
    exit();
}


 else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>