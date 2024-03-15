<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

    $accountNumber = $_POST['accountNumber'];
    $password = $_POST['password'];
    $atmPin = $_POST['atmPin'];

    
    $con = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($con, $sql);
    if (mysqli_num_rows($result) > 0) {
            $update = "update client_info set atm_pin = '$atmPin' where acc_num = '$accountNumber' && password = '$password'";
            $updateResult = mysqli_query($con, $update);
            echo 1;
    }else {
        echo 0;
    }
    

?>