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
    $a = $_POST['feedbackfullname'];
    $b = $_POST['feedbackemail'];
    $c = $_POST['feedbackexperience'];
    $d = $_POST['feedbackmessage'];
}


$sql = "INSERT INTO feedback_table (feedback_fullname,feedback_email,
feedback_experience,feedback_message) VALUES ('$a','$b','$c','$d')";

if (mysqli_multi_query($conn, $sql)) {
    header("Location: http://localhost/hybrid_heaven/project/Hybrid_Heaven_Feedback.html");
    exit();
}

 else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>