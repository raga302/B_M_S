<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

    $accNum = $_POST['accNum'];
    $atmPin = $_POST['atmPin'];
    
    $con = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
    $sql = "select * from client_info where acc_num = '$accNum' && atm_pin = '$atmPin'";
    $result = mysqli_query($con, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        $newAtmPin = "";
        foreach ($x as $z) {
            $update = "update client_info set  atm_pin = '$newAtmPin' where acc_num = '$accNum'";
            $updateResult = mysqli_query($con, $update);
            echo 1;
        }
    
    }else{
        echo 0;
    }
  
?>