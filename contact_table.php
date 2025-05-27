<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = "hybrid_heaven_contact";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());  
}
$sql = "CREATE TABLE contact_table (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    contact_fullname VARCHAR(90) NOT NULL,
    contact_email VARCHAR(90) NOT NULL,
    contact_message VARCHAR(300) NOT NULL,
    contacted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql)) {
    echo "Table 'contact_table' created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
