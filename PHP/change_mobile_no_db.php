<?php
header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$accountNumber = $_POST['accountNumber'];
$password = $_POST['password'];
$new_mobile_number = $_POST['new_mobile_number'];


$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        foreach ($x as $z) {
            $oldMobileNumber = $z[2];
            if($new_mobile_number == $oldMobileNumber){
                
                echo $new_mobile_number;
            }else{
                $qry = "update client_info set mobile_number = '$new_mobile_number' where acc_num = '$accountNumber' && password = '$password'";
                $result = mysqli_query($conn, $qry);
                echo 1;
            }
            
           

        }
    } else {
        echo 0;
    }
}




?>