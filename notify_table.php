<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = "hybrid_heaven_contact";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());  
}
$sql = "CREATE TABLE notify_table (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    notify_email VARCHAR(90) NOT NULL,
    notified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql)) 
{
    echo "Table 'notify_table' created successfully";
}
 else
{
    echo "Error creating table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
