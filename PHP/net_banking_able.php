<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');
    
    $accountNumber = $_POST['accountNumber'];
    $password = $_POST['password'];
    $userid = $_POST['userid'];
    $mpin = $_POST['mpin'];

    $conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
    if($conn){
        $sql = "select * from client_info where acc_num = '$accountNumber' && password = '$password'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $qur = "select * from client_info where user_id = '$userid'";
            $finalQur = mysqli_query($conn, $qur);
            if(mysqli_num_rows($finalQur) > 0){
                echo "This User_ID not Available";
            }else{
               $newQury = "update client_info set user_id = '$userid', m_pin = '$mpin' where acc_num = '$accountNumber' && password = '$password'";
                $val = mysqli_query($conn, $newQury);
                echo 1;
                }
        
        }
        else {
            echo 0;
    }

}

?>