/*
 * blogs.js
 * 
 * @author Anisha
 * @version 1.0.0
 */

var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var stringRepeat = require( './shared');
const { response } = require('express');
var router = express.Router( );

var blogs = {
    blogs:[
        { id: 'B1', title: 'HTML', content: 'lorem ipsum', date: '7 Dec 2018', author: 'Steve Balmer', category: 'C1' },
        { id: 'B2', title: 'SCRUM', content: 'lorem ipsum', date: '3 Nov 2018', author: 'Bill Gates', category: 'C2' },
        { id: 'B3', title: 'Agile', content: 'lorem ipsum', date: '2 Sep 2018', author: 'Mark Zukerberg', category: 'C2' }
    ],
    categories:[
        { id: 'C1', name: 'Information Technology' },
        { id: 'C2', name: 'Management' },
        { id: 'C3', name: 'Food' }
    ],
    comments:[
        { id: 'CN1', userName: 'Jack', comment: 'Impressive!', blog: 'B1' },
        { id: 'CN2', userName: 'Jill', comment: 'This blog is great', blog: 'B1' },
        { id: 'CN3', userName: 'Tom', comment: 'This blog is great', blog: 'B2' }
    ]
};

// CATEGORIES
// blogs/categories
router.get( '/categories', function( req, res ) {
    
    res.json( blogs.categories ); 
});

// blogs/categories/:id
router.get( '/categories/:id', function( req, res ) {
    
    let blogsCategories = ( blogs.blogs.filter((item) => item.category === req.params.id) );
    stringRepeat( blogsCategories , 'content' );
    res.json( blogsCategories );
});


// BLOGS
// blogs
router.get( '/', function( req, res ) {

    let blogsArray = blogs.blogs;
    stringRepeat( blogsArray , 'content' );
    res.json( blogsArray ); 
});


// blogs/:id
router.get( '/:id', function( req, res ) {
    
    let blogArray = [ ];
    let blog = ( blogs.blogs.find((item) => item.id === req.params.id) );
    blogArray.push( blog );
    stringRepeat( blogArray , 'content' );
    res.json( blog );
});


// COMMENTS
// blogs/comments/:id
router.get( '/comments/:id', function( req, res ) {

    let comments = ( blogs.comments.filter((item) => item.id === req.params.id) );
    res.json( comments );
});

// blogs/:id/comments
router.get( '/:id/comments', function( req, res ) {

    let comments = ( blogs.comments.filter((item) => item.blog === req.params.id) );
    res.json( comments );
});

// blogs/:id/comments
const jsonBodyParser = bodyParser.json( );
router.post( '/:id/comments', jsonBodyParser,  function( req, res ) {

    var length = blogs.comments.length + 1;
    var userId = String(`CN${length}`);
    blogs.comments.push( {id:userId, userName:req.body.userName, comment:req.body.comment, blog:req.body.blogId} );
    res.send( blogs.comments.find((item) => item.id === userId ) );
});

module.exports = router;
