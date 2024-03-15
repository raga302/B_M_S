<?php

header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

    
$name = $_POST['name'];
$mobileNumber = $_POST['mobileNumber'];
$password = $_POST['password'];
$aadharNumber = $_POST['aadharNumber'];
$address = $_POST['address'];
$email = $_POST['email'];
$accountType = $_POST['accountType'];
$accountNumber = $_POST['accountNumber'];;
$accountBalance = $_POST['accountBalance'];
$userID = $_POST['userID'];
$mPin = $_POST['mPin'];
$atmPin = $_POST['atmPin'];
$confirm = $_POST['confirm'];

$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
 
function createRandomNumber()
{
    $random_number = rand(1000, 9999);
    return $random_number;
}

if ($conn) {
    $check = "select * from client_info where mobile_number = '$mobileNumber'";
    $checkData = mysqli_query($conn, $check);
    if (mysqli_num_rows($checkData) > 0) {
       echo 0;
        
    } else {
        $sql = "insert into client_info (name, mobile_number, password, aadhar_number, address, email, acc_type, acc_num, acc_bal, user_id, m_pin, atm_pin, confirm) values ('$name', '$mobileNumber', '$password', '$aadharNumber', '$address', '$email', '$accountType', '$accountNumber', '$accountBalance', '$userID', '$mPin', '$atmPin', '$confirm')";
        $result = mysqli_query($conn, $sql);
        echo 1;
    }
}


?>