<?php

session_start();

include 'db_connection.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $connection = get_database_connection();
        if (!$connection) {
            die("Connection failed: " . mysqli_connect_error());
        }

        $statement = $connection->prepare("SELECT user_password FROM mario_info WHERE user_username = ?");
        if (!$statement) {
            die("Error in preparing SQL statement: " . $connection->error);
        }
        
        $statement->bind_param("s", $username);
        if (!$statement->execute()) {
            die("Error in executing SQL statement: " . $statement->error);
        }

        $result = $statement->get_result();
        
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $hashed_password = $row["user_password"];

            if ($password === $hashed_password) {
                $_SESSION["username"] = $username;
                echo "Login successful. Redirecting...";
                header("Location: index.html"); 
                exit();

            } else {
                echo "Invalid username or password";
            }
        }else{
            echo "Invalid username or password";
        }
    }
    else{
        echo "Invalid username or password";
    }
}
?>