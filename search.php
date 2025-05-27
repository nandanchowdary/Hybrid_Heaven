
<?php
$host='localhost';
$user='root';
$pass='';
$conn=mysqli_connect($host,$user,$pass);
$sql="CREATE DATABASE HYBRID_HEAVEN_SEARCHED";
if(mysqli_query($conn,$sql))
{
echo "connected";
}
mysqli_close($conn);
?>