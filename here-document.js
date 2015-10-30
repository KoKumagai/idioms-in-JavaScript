var heredoc = (function () {/*
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
    </head>
    <body>
        <p>This is a paragraph</p>
    </body>
</html>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

console.log(heredoc);
