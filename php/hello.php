<!DOCTYPE html>
<html>
    <head>
        <title> PHP Lesson 1</title>
    </head>

    <body>

        <?php

        // Keywords are NOT case-sensitive (variables and functions are)
        echo "<h1>Welcome to PHP!</h1>";
        eCHo "<br>";
        ECHO "It's a great langauge to know";
        ECHo "<br><br>";


        $name = "Charlie";

        // String concatenation
        echo "Hello ". $name . "! (with concatenation)";
        echo "<br>";

        // String interpolation - it only works with double-quoted strings!
        echo "Hello $name! (with interpolation)";
        echo "<br>";
        echo 'Hello $name!';
        echo "<br><br>";

        // Some math
        $x = 5;
        $y = 3;
        
        echo "$x * $y = " . ($x *$y);

        function square($number)
        {
            return $number * $number;
        }
        echo "<br><br>";
        echo "4 squared is " . square(4);

        ?>

    </body>
<html>