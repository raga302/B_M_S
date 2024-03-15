<?php
header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$accountNumber = $_POST['accountNumber'];
$password = $_POST['password'];


$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        foreach ($x as $z) {
            $name = $z[1];
            $mobile_Number = $z[2];
            $aadharNumber = $z[4];
            $address = $z[5];
            $email = $z[6];
            $accountType = $z[7];
            $accNum = $z[8];
            $accountBalance = $z[9];
            $userId = $z[10];
            $mpin = $z[11];
            $atmpin = $z[12];
           echo $name;
           echo ",";
           echo $mobile_Number;
           echo ",";
           echo $aadharNumber;
           echo ",";
           echo $address;
           echo ",";
           echo $email;
           echo ",";
           echo $accountType;
           echo ",";
           echo $accNum;
           echo ",";
           echo $accountBalance;
           echo ",";
           echo $userId;
           echo ",";
           echo $mpin;
           echo ",";
           echo $atmpin;
           
          
        }
    } else {
        echo 0;
    }
};




?>