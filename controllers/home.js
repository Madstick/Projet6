exports.home = ( req, res ,next ) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>Bien sur le back office de So Peckocko</p>
    </body>
    </html>`)
}