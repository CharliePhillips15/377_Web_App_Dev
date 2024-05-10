<!DOCTYPE html>
<html>
    <head>
        <title>Sample School District</title>
    </head>

    <body>
        <h1>Welcome to Sample School District</h1>

        <h2>Student List</h2>

        <p>Filter by last name starting with 
<?php
    for ($i=0; $i < 26; $i++)
    {
        $letter = chr($i + ord("A"));
        echo "<a href='student-list.php?last_name=$letter'>$letter</a> ";
    }
?>

            <form action = "student-list.php">
                Filter by first name contains
                <input type= "text" name = "first_name" />
                <input type = "submit" value = "Filter">
            </form>
            <form action = "student-list.php">
                Filter by YOG contains
                <input type= "integer" name = "year_of_grad" />
                <input type = "submit" value = "Filter">
            </form>
            

        <table border = "1">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>YOG</th>
            </tr>

            <!-- ADD ROWS FOR EACH STUDENT IN THE DATABASE -->

        </p>
<?php

$servername = "localhost";
$username = "root";
$password = "KaliBear25!";
$dbname = "sis";

// Connect to the database and make sure it was successful
$connection = new mysqli($servername,$username, $password, $dbname);

if($connection -> connect_error)
{

    die("Connection Failed: " . $connection->connect_error);

}

extract($_REQUEST);

$sql = "SELECT stu_first_name, stu_last_name, stu_yog FROM students ";

if (isset($last_name))
{
    $sql .= "WHERE stu_last_name LIKE '%$last_name%' ";
}
if (isset($first_name))
{
    $sql .= "WHERE first_name LIKE '%$first_name%' ";
}

$sql .= "ORDER BY stu_last_name, stu_first_name";

echo $sql;

$result = $connection -> query($sql);
while ($row = $result -> fetch_assoc())
{
    echo "<tr>";
    echo "<td>" . $row['stu_first_name'] . "</td>";
    echo "<td>" . $row['stu_last_name'] . "</td>";
    echo "<td>" . $row['stu_yog'] . "</td>";
    echo "</tr>";


}
?>


        </table>
    </body>
<html>