<?php
header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$accountNumber = $_POST['accountNumber'];
$password = $_POST['password'];
$new_Account_Type = $_POST['new_Account_Type'];


$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        foreach ($x as $z) {
            $oldAccType = $z[7];
            if($new_Account_Type == $oldAccType){
                
                echo $new_Account_Type;
            }else{
                $qry = "update client_info set acc_type = '$new_Account_Type' where acc_num = '$accountNumber' && password = '$password'";
                $result = mysqli_query($conn, $qry);
                echo 1;
            }
            
            //if ($new_Account_Type <= 0) {
            //    echo "Please Enter Valid Amount !";
            //} else {
            //    $accBal = $accBal + $new_Account_Type;
            //    $qry = "update client_info set acc_bal = '$accBal' where acc_num = '$accountNumber'";
            //    $result = mysqli_query($conn, $qry);
            //    echo 1;
            //    # code...
            //}

        }
    } else {
        echo 0;
    }
}




?>