<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

    $userid = $_POST['userid'];
    $mpin = $_POST['mpin'];
    
    $con = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
    $sql = "select * from client_info where user_id = '$userid' && m_pin = '$mpin'";
    $result = mysqli_query($con, $sql);
    $x = mysqli_fetch_all($result);
    $newUserId = "";
    $newMpin = "";
    foreach ($x as $z) {
        $update = "update client_info set user_id = '$newUserId', m_pin = '$newMpin' where user_id = '$userid'";
        $updateResult = mysqli_query($con, $update);
        echo 1;
    }

?>