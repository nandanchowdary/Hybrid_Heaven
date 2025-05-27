<?php
$dbhost = 'localhost';  
$dbuser = 'root';       
$dbpass = '';           
$dbname = "hybrid_heaven_user_data";       // Database name


$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $loginusername = $_POST['loginusername'];
    $loginpass = $_POST['loginpass'];
}

// Correct SQL syntax for multiple inserts
$sql = "INSERT INTO login_table(loginusername,loginpass) VALUES ('$loginusername', '$loginpass');";

// Execute multiple queries
if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/dashboard.html");
    exit();
}

 // Always call exit after header redirect
 else {
    echo "Error: " . mysqli_error($conn);
}



setcookie("username", "$loginusername", time() + (86400 * 30), "/"); 
setcookie("password", "$loginpass", time() + (86400 * 30), "/"); 
echo "Cookie has been set!";
?>


// Close connection
mysqli_close($conn);
?>