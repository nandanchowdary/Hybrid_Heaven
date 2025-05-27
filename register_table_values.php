<?php
$dbhost = 'localhost';  
$dbuser = 'root';       
$dbpass = '';           
$dbname = "hybrid_heaven_user_data";       // Database name

// Create connection
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $regisfullname = $_POST['registerfullname'];
    $regisemail = $_POST['registeremail'];
    $regispass = $_POST['registerpassword'];

}
// Correct SQL syntax for multiple inserts
$sql = "INSERT INTO register_table(register_fullname,register_email,register_password) VALUES ('$regisfullname', '$regisemail','$regispass');";

// Execute multiple queries
if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/login.html");
    exit();
}

 // Always call exit after header redirect
 else {
    echo "Error: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>