<?php

include('library.php');

$connection = get_database_connection();

$sql = '';

if (isset($id) && $id != '')
{
    $sql =<<<SQL
    UPDATE movies
       SET mov_title = '$title',
           mov_year = $year,
           mov_genre = '$genre',
           mov_rating = "$rating",
           mov_earnings = "$earnings",
           mov_director = "$director",
           mov_budget = "$budget",
           mov_duration = "$duration",
           mov_imdb_id = '$imdb_id'
        
     WHERE mov_id = $id
    SQL;
}
else
{
    $sql =<<<SQL
    INSERT INTO movies (mov_title, mov_year, mov_genre, mov_rating, mov_earnings, mov_director, mov_budget, mov_duration mov_imdb_id)
    VALUES ('$title', $year, '$genre', '4genre', '$rating', '$earnings', '$director', '$budget', '$duration', '$imdb_id',)
    SQL;
}

$connection->query($sql);

header('Location: index.php');