<!DOCTYPE html>
<html>
    <head>
        <title>hMDB - The Hanover Movie Database</title>
    </head>

    <body>
        <h1>hMDB - The Hanover Movie Database</h1>

        <h2> New Movie Details</h2>

        <form action = "save-movie.php">
            Title: <input type = "text" name = "title"/>
            <br />
            Release Year: <input type = "text" name = "year"/>
            <br />
            Genre: <input type = "text" name = "genre"/>
            <br />
            iMDB Rating: <input type = "text" name = "rating"/>
            <br />
            Earnings : <input type = "text" name = "earnings"/>
            <br />
            Director: <input type = "text" name = "director"/>
            <br />
            Budget: <input type = "text" name = "budget"/>
            <br />
            Duration: <input type = "text" name = "duration"/>
            <br />
            <input type = "submit" value = "Save"/>

        </form>
    </body> 
</html>