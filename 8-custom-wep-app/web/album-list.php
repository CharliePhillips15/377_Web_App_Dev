<form action = "index.php?content=album-list">
        Sort by Rating (High or Low)
    <input type= "text" name = "rating" />
    <input type = "submit" value = "Filter">
<form action = "index.php?content=album-list">
        Filter by year
    <input type= "integer" name = "release_date" />
    <input type = "submit" value = "Filter">
</form>

<table class="table table-striped table-hover">
    <thead>
        <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>First Week Sales</th>
            <th>Artist</th>
            <th>Duration</th>
            <th>Grammy</th>
            <th>RYM Link</th>
        </tr>
    </thead>

    <tbody>
<?php

$connection = get_database_connection();

$sql = "SELECT alb_id,
                alb_title, 
                DATE_FORMAT(alb_release_date, '%m/%d/%Y') AS alb_release_date_formatted,
                alb_genre, 
                alb_rating, 
                alb_first_week_sales, 
                alb_artist, 
                alb_duration,
                alb_grammy,
                alb_rym
                FROM albums ";

if (isset($release_date) && $release_date != "")
{
    $sql .= "WHERE YEAR(alb_release_date) = $release_date ";
}

if (isset($rating))
{
    if ($rating == "High"){
        $sql .= "ORDER BY alb_rating DESC ";

    }else if($rating == "Low"){
        $sql .= "ORDER BY alb_rating  ";
    }
    
}else{
    $sql .= "ORDER BY alb_title";

}

$result = $connection->query($sql);
while ($row = $result->fetch_assoc())
{
    echo '<tr>';
    echo '<td>';
    echo '<a href="index.php?content=album-detail&id=' . $row['alb_id'] . '">' . $row['alb_title'] . '</a>';
    echo '</td>';
    echo '<td>' . $row['alb_release_date_formatted'] . '</td>';
    echo '<td>' . $row['alb_genre'] . '</td>';
    echo '<td>' . $row['alb_rating'] . '</td>';
    echo '<td>' . $row['alb_first_week_sales'] . '</td>';
    echo '<td>' . $row['alb_artist'] . '</td>';
    echo '<td>' . $row['alb_duration'] . '</td>';
    echo '<td>' . $row['alb_grammy'] . '</td>' ;
    echo '<td>';
    if ($row['alb_rym'] != '')
    {
        echo '<a href="' . $row['alb_rym'] . '" target="_blank" title="View on RYM"><i class="bi bi-file-earmark-music"></i></a>';
    }
    echo '</td>';
    echo '</tr>';
}

?>
    </tbody>
</table>

<a href="index.php?content=album-detail" class="btn btn-primary" role="button" aria-disabled="true">Add an Album</a>