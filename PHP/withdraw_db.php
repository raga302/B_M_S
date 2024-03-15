<?php
header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$accountNumber = $_POST['accountNumber'];
$password = $_POST['password'];
$withdraw = $_POST['withdraw'];

$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        foreach ($x as $z) {
            $accBal = $z[9];
            if ($withdraw >= $accBal) {
                echo "Insufficient Balance !";
            } else {
                $accBal = $accBal - $withdraw;
                $qry = "update client_info set acc_bal = '$accBal' where acc_num = '$accountNumber'";
                $result = mysqli_query($conn, $qry);
                echo 1;
                # code...
            }

        }
    } else {
        echo 0;
    }
}




?>