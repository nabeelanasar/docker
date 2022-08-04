var express = require( 'express' );
var cors = require('cors');

var blogRouter = require( './routes/blogs' );
var covidRouter = require( './routes/covid' );
var serviceRouter = require( './routes/services' );
var projectRouter = require( './routes/projects' );
var productRouter = require( './routes/products' );
var usersRouter = require( './routes/users' );

var app = express( );

const PORT = 8000;
const HOST = '0.0.0.0';
// var port = process.env.PORT || 8000;



//-----------------Middleware-----------------------
// enable CORS
app.use( cors() );

// middleware for handling static resources
app.use( '/assets', express.static(__dirname + '/public') );

// middleware to log all requests
app.use( function(req, res, next) {
    console.log( 'Request URL: ', req.url );
    next( );
});

app.use( '/api/v1/blogs', blogRouter );
app.use( '/api/v1/covid', covidRouter );
app.use( '/api/v1/services', serviceRouter );
app.use( '/api/v1/projects', projectRouter );
app.use( '/api/v1/products', productRouter );
app.use( '/users', usersRouter );

//-----------------Middleware------------------------

app.get( '/', function( req, res ) {

    res.send( `<html>
            <head>
                <link href=assets/style.css type=text/css rel=stylesheet />
            </head>
            <body>
                <h1>Hello from (Docker Container 3)!</h1>
            </body>
        </html>` );
});

app.get( '/health', function( req, res ) {

    res.send( 'ok' );
});

app.listen(PORT, HOST);
// app.listen( PORT, () =>
//     console.log('Server running on http://localhost: ' + port)
//     // console.log(`Server runnin?g on http://localhost:${port}`)
// );
console.log(`Server running 2 on http://${HOST}:${PORT}`);