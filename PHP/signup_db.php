<?php 

    header('Access-Control-Allow-Origin: https://uniquebmsweb.infinityfreeapp.com/');
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm = $_POST['confirm'];

    $conn = mysqli_connect("sql202.infinityfree.com", "if0_36145361", "RIlr9k54Wk", "if0_36145361_bms");
    if($conn){

        $check = "select * from user_info where email = '$email'";
        $check_val = mysqli_query($conn, $check);
        if(mysqli_num_rows($check_val) > 0){
            echo 0;
        }else{
            $sql = "insert into user_info (name, email, password, confirm) values('$name','$email', '$password', '$confirm')";
            $data = mysqli_query($conn, $sql);
            echo 1;
            
        }


    }
    

?>