<?php
$host='localhost';
$user='root';
$pass='';
$conn=mysqli_connect($host,$user,$pass);
$sql="CREATE DATABASE hybrid_heaven_contact";
if(mysqli_query($conn,$sql))
{
echo "connected";
}
mysqli_close($conn);
?>