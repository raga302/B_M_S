<?php

header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$firstAccountNumber = $_POST['firstAccountNumber'];
$password = $_POST['password'];
$amount = $_POST['amount'];
$secondAccountNumber = $_POST['secondAccountNumber'];

$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $first = "select * from client_info where acc_num = '$firstAccountNumber' && password = '$password'";
    $result = mysqli_query($conn, $first);
    if (mysqli_num_rows($result) > 0) {
        $result = mysqli_fetch_all($result);
        $old_Balance_first = $result[0][9];
        if ($old_Balance_first > $amount) {
            $old_Balance_first = $old_Balance_first - $amount;

            $second = "select * from client_info where acc_num = '$secondAccountNumber'";
            $final = mysqli_query($conn, $second);
            if (mysqli_num_rows($final) > 0) {
                $final = mysqli_fetch_all($final);
                $old_Balance_Second = $final[0][9];
                $old_Balance_Second = $old_Balance_Second + $amount;
                $sql_first = "update client_info set acc_bal = '$old_Balance_first' where acc_num = '$firstAccountNumber' && password = '$password'";
                $sql_first_result = mysqli_query($conn, $sql_first);
                $sql_first = "update client_info set acc_bal = '$old_Balance_Second' where acc_num = '$secondAccountNumber'";
                $sql_first_result = mysqli_query($conn, $sql_first);
                echo 1;
            } else {
                echo 0;
            }
        } else {
            echo 'Insufficient Balance !';
        }
    } else {
        echo 0;
    }
}


?>