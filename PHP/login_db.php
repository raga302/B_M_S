<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');

    $email = $_POST['email'];
    $password = $_POST['password'];
    $conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
 

    if($conn){
        $sql ="select * from user_info where email = '$email' && password = '$password'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) > 0){
            
            echo 1;
        }else{
            echo 0;
        }
    }

    

?>