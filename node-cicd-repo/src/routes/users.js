var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var router = express.Router( );

const jsonBodyParser = bodyParser.json( );

var users = {
    users:[
        {id: '1', firstName: 'Tom', lastName: 'Spencer', phone: '', email: 'tom@gmail.com', password: '123456', token: 'TOK1'}
    ],
    tokenExpiry: 2
};


// /users : SignUp
router.post( '/', jsonBodyParser, function( req, res ) {

    var length = users.length + 1;
    var userId = String(`${length}`);
    var token = String(`TOK${length}`);
    users.users.push( {id:userId, firstName:req.body.firstName, lastName:req.body.lastName, phone:req.body.phone, email:req.body.email, password:req.body.password, token:token } );
    
    let newUser = users.users.find((item) => item.id === userId )

    if ( newUser ) {
        // let milliseconds = Number(users.tokenExpiry) * 24 * 60 * 60 * 1000;  // 2 days
        let milliseconds = 5 * 60 * 1000;   // 1 minute
        res.json( {accessToken: newUser.token, user: newUser, expiresIn: Date.now()} );
    } else {
        res.status(400).json( {message: 'SignIn not successfull!!', code: '400'} );
    }
});

// /users/authentication :
router.post( '/authentication', jsonBodyParser, function( req, res ) {

    let user = users.users.find((user) => {
        if ( user.email === req.body.email && user.password === req.body.password ) {
            return user;
        }
    });

    if ( user ) {
        // let milliseconds = Number(users.tokenExpiry) * 24 * 60 * 60 * 1000;  // 2 days
        let milliseconds = 5 * 60 * 1000;   // 1 minute
        res.json( {accessToken: user.token, user: user, expiresIn: milliseconds} );
    } else {
        res.status(400).json( {message: 'Not authenticated!', code: '400'} );
    }
});

module.exports = router;
