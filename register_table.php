<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = "hybrid_heaven_user_data";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());  
}
$sql = "CREATE TABLE register_table (
    register_fullname varchar(90) not null,
    register_email VARCHAR(90) NOT NULL,
    register_password VARCHAR(90) NOT NULL
)";
if (mysqli_query($conn, $sql)) {
    echo "Table 'register_table' created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
