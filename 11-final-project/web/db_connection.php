<?php

function get_database_connection()
{
    $servername = 'localhost';
    $name = 'root';
    $passworded = 'KaliBear25!';
    $dbname = 'mario_game';

    $connection = new mysqli($servername, $name, $passworded, $dbname);
    if ($connection->connect_error)
    {
        die('Connection failed: ' . $connection->connect_error);
    }

    return $connection;
}

