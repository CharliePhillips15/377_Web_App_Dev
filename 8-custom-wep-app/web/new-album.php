<!DOCTYPE html>
<html>
    <head>
        <title>Rate Your Albums</title>
    </head>

    <body>
        <h1>Rate Your Albums</h1>

        <h2> New Albums Details</h2>

        <form action = "save-album.php">
            Title: <input type = "text" name = "title"/>
            <br />
            Release Date: <input type = "text" name = "release_date"/>
            <br />
            Genre: <input type = "text" name = "genre"/>
            <br />
            RYM Rating: <input type = "text" name = "rating"/>
            <br />
            First Week Sales : <input type = "text" name = "fist-week-sales"/>
            <br />
            Artist: <input type = "text" name = "artist"/>
            <br />
            Duration: <input type = "text" name = "duration"/>
            <br />
            Grammy <input type = "text" name = "grammy"/>
            <br />
            RYM Link <input type = "text" name = "rym"/>
            <br />
            <input type = "submit" value = "Save"/>

        </form>
    </body> 
</html>