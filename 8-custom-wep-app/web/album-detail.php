<?php

$title = '';
$release_date = '';
$genre = '';
$rating = '';
$first_week_sales = '';
$artist = '';
$duration = '';
$rym = '';
$grammy = '';


if (isset($id))
{
    $connection = get_database_connection();

    $sql =<<<SQL
    SELECT alb_title, 
            DATE(alb_release_date) AS alb_release_date_formatted,
            alb_genre, 
            alb_rating, 
            alb_first_week_sales, 
            alb_artist, 
            alb_duration, 
            alb_rym,
            alb_grammy
      FROM albums
      WHERE alb_id = $id
    SQL;

    $result = $connection->query($sql);
    $row = $result->fetch_assoc();

    $title = $row['alb_title'];
    $release_date = $row['alb_release_date_formatted'];
    $genre = $row['alb_genre'];
    $rating = $row['alb_rating'];
    $first_week_sales = $row['alb_first_week_sales'];
    $artist = $row['alb_artist'];
    $duration = $row['alb_duration'];
    $rym = $row['alb_rym'];
    $grammy = $row['alb_grammy'];

}

?>
<form action="save-album.php">
    <input type="hidden" class="form-control" id="id" name="id" value="<?php echo isset($id) ? $id : '' ?>" />

    <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" name="title" value="<?php echo $title ?>" />
    </div>

    <div class="mb-3">
        <label for="release_date" class="form-label">Release Date</label>
        <input type="date" class="form-control" id="year" name="release_date" value="<?php echo $release_date ?>" />
    </div>

    <div class="mb-3">
        <label for="rating" class="form-label">Rating</label>
        <input type="float" class="form-control" id="rating" name="rating" value="<?php echo $rating ?>" />
    </div>

    <div class="mb-3">
        <label for="first_week_sales" class="form-label">First Week Sales</label>
        <input type="number" class="form-control" id="first_week_sales" name="first_week_sales" value="<?php echo $first_week_sales ?>" />
    </div>

    <div class="mb-3">
        <label for="artist" class="form-label">Artist</label>
        <input type="text" class="form-control" id="artist" name="artist" value="<?php echo $artist ?>" />
    </div>

    <div class="duration">
        <label for="duration" class="form-label">Duration</label>
        <input type="number" class="form-control" id="duration" name="duration" value="<?php echo $duration ?>" />
    </div>

    

    <div class="genre">
        <label for="genre" class="form-label">Genre</label>
        <input type="text" class="form-control" id="genre" name="genre" value="<?php echo $genre ?>" />
    </div>

    <div class="rym">
        <label for="rym" class="form-label">Rate Your Music Link</label>
        <input type="text" class="form-control" id="rym" name="rym" value="<?php echo $rym ?>" />
    </div>

    <div class = "grammy">
        <label for = "grammy" class = "form-label"> Grammy</label>
        <input type = "number" class = "form-control" id = "grammy" name = "grammy" value = "<?php echo $grammy?>" />
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
    <a href="index.php?content=album-list" class="btn btn-secondary" role="button" aria-disabled="true">Cancel</a>
<?php if (isset($id)) { ?>
    <button type="button" class="btn btn-danger" onclick="deleteAlbum()">Delete</button>
    <script>

    function deleteAlbum() {
        if (confirm('Are you sure you want to delete this album?')) {
            location.href = 'delete-album.php?id=<?php echo isset($id) ? $id : '' ?>';
        }
    }

    function dataValidation(){
        if ()
    }

    </script>
<?php } ?>
</form>