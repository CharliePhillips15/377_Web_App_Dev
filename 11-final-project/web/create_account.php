<?php

include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $username = filter_var($_POST["username"], FILTER_SANITIZE_STRING);
        $password = filter_var($_POST["password"], FILTER_SANITIZE_STRING);
        
        $connection = get_database_connection();
        
        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }
        
        $statement = $connection->prepare("INSERT INTO mario_info (user_username, user_password) VALUES (?, ?)");
        if (!$statement) {
            die("There is an error in the sql");
        }
        
        $statement->bind_param("ss", $username, $password);
        
        if ($statement->execute()) {
            header("Location: start.html");
            exit();
        } else {
            echo ("There is an error in the sql");
        }
        
       
    }
}

?>

