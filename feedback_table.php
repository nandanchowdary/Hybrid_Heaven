<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = "hybrid_heaven_contact";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());  
}
$sql = "CREATE TABLE feedback_table (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    feedback_fullname VARCHAR(90) NOT NULL,
    feedback_email VARCHAR(90) NOT NULL,
    feedback_experience VARCHAR(90) NOT NULL,
    feedback_message VARCHAR(200) NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if (mysqli_query($conn, $sql)) {
    echo "Table 'feedback_table' created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}
mysqli_close($conn);
?>
