/*products.js 
* 
*@author Vineetha Vijayan 
*@version 1.0.0 
*/ 

var express = require( 'express' );
var router = express.Router( );

var products = {
    products:[      
        { id:'P1', name: 'Dell', price: '40000', details: 'Dell', category: 'PRC1', summary: 'Dell' },
        { id:'P2', name: 'Printer', price: '25000', details: 'Epson', category: 'PRC1', summary: 'Printer Vendor' },
        { id:'P3', name: 'Laptop', price: '25000', details: 'Lenovo', category: 'PRC2', summary: 'Laptop Vendor' },
        { id:'P4', name: 'Laptop', price: '25000', details: 'Lenovo', category: 'PRC2', summary: 'Laptop Vendor' },
        { id:'P5', name: 'Laptop', price: '25000', details: 'Lenovo', category: 'PRC2', summary: 'Laptop Vendor' },
    ],
    category:[
        { id: 'PRC1', name: 'Computer' },
        { id: 'PRC2', name: 'Laptop' },
        { id: 'PRC3', name: 'Mobile' }
    ]
};

router.get( '/categories', function( req, res ) {

    res.json( products.category ); 
});

router.get( '/categories/:id', function( req, res ) {

    let product  = ( products.products.filter((item) => item.category === req.params.id) );
    res.json( product );
});

router.get( '/', function( req, res ) {

    res.json( products.products ); 
});

router.get( '/:id', function( req, res ) {

    let product  = ( products.products.find((item) => item.id === req.params.id) );
    res.json( product );
});

module.exports = router;
