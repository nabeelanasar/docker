/*
 * services.js
 * 
 * @author Viji
 * @version 1.0.0
 */

var express = require( 'express' );
var stringRepeat = require( './shared');
var router = express.Router( );

var services = {
    services_categories:[     
        { id: 'C1', name: 'Support' },
        { id: 'C2', name: 'Information Technology' },
        { id: 'C3', name: 'Management' }
    ],
    services:[
        { id: 'S1', name: 'Help Desk Services', description: 'Help Desk Services.', category_id: 'C1' },
        { id: 'S2', name: 'IT Support Services', description: 'IT Support services.', category_id: 'C2'  },
        { id: 'S3', name: 'Data Center Services', description: 'Data Center services.', category_id: 'C2' }
    ],
    services_details:[     
        { id: 1, service_id: 'S1', details: 'Lorem Ipsum1' },
        { id: 2, service_id: 'S2', details: 'Lorem Ipsum2' },
        { id: 3, service_id: 'S3', details: 'Lorem Ipsum3' }
    ]
};

router.get( '/categories', function( req, res ) {
    
    res.json( services.services_categories ); 
});

router.get( '/categories/:id', function( req, res ) {

    let service  = ( services.services.filter((item) => item.category_id === req.params.id) );
    stringRepeat( service, 'description' );
    res.json( service );
});

router.get( '/:id', function( req, res ) {
   
       let serviceArray = [ ];
       let service  = ( services.services_details.find((item) => item.service_id === req.params.id) );
       serviceArray.push( service );
       stringRepeat( serviceArray, 'details' );
       const serviceDetails = serviceArray.map( (details,i) => {
        const detailsItem = services.services.find(services => services.id === details.service_id)
             details.name = detailsItem 
             ? detailsItem.name
             : null
             return details
        })
        res.json( serviceDetails[0] );
   });

router.get( '/', function( req, res ) {
    
    let servicesArray = services.services;
    stringRepeat( servicesArray, 'description' );
    res.json( servicesArray ); 
});

module.exports = router;
