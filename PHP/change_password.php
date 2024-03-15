<?php
header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

$accountNumber = $_POST['accountNumber'];
$password = $_POST['password'];
$new_Password = $_POST['new_Password'];


$conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
if ($conn) {
    $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $x = mysqli_fetch_all($result);
        foreach ($x as $z) {
            $old_Password = $z[3];
            if($new_Password == $old_Password){
                
                echo $new_Password;
            }else{
                $qry = "update client_info set password = '$new_Password' where acc_num = '$accountNumber' && password = '$password'";
                $result = mysqli_query($conn, $qry);
                echo 1;
            }
            
           

        }
    } else {
        echo 0;
    }
}




?>