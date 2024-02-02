<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

$title = $connection->real_escape_string($title);
$release_date = $connection->real_escape_string($release_date);
$genre = $connection->real_escape_string($genre);
$rating = $connection->real_escape_string($rating);
$first_week_sales = $connection->real_escape_string($first_week_sales);
$artist = $connection->real_escape_string($artist);
$duration = $connection->real_escape_string($duration);
$rym = $connection->real_escape_string($rym);
$grammy = $connection->real_escape_string($grammy);



if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE albums
       SET alb_title = '$title',
           alb_release_date = '$release_date',
           alb_genre = '$genre',
           alb_rating = "$rating",
           alb_first_week_sales = "$first_week_sales",
           alb_artist = "$artist",
           alb_duration = "$duration",
           alb_rym = '$rym'
           alb_grammy = '$grammy'
        
     WHERE alb_id = $id
    SQL;

}
else
{
    $sql =<<<SQL
    INSERT INTO albums (alb_title, alb_release_date, alb_genre, alb_rating, alb_first_week_sales, alb_artist, alb_duration, alb_rym, alb_grammy)
    VALUES ('$title', '$release_date', '$genre', '$rating', '$first_week_sales', '$artist', '$duration', '$rym', '$grammy')
    SQL;

}


$connection->query($sql);

header('Location: index.php');