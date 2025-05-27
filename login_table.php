<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = "hybrid_heaven_user_data";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());  
}
$sql = "CREATE TABLE login_table (
    loginusername VARCHAR(90) NOT NULL,
    loginpass VARCHAR(90) NOT NULL
)";
if (mysqli_query($conn, $sql)) {
    echo "Table 'login_table' created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
