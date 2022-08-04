/*
 * projects.js
 * 
 * @author Anu
 * @version 1.0.0
 */

var express = require( 'express' );
var stringRepeat = require( './shared');
var router = express.Router( );

var projects = {
    projects_details:[
        { id: 'D1', project_id: 'PJ1', cost: 'AED 20000', schedule: '2 years', description: 'about it project', startDate: '5 June 2018', endDate: '5 June 2020' },
        { id: 'D2', project_id: 'PJ2', cost: 'AED 30000', schedule: '3 months', description: 'about erp project', startDate: '3 Nov 2018', endDate: '3 Feb 2019' },
        { id: 'D3', project_id: 'PJ3', cost: 'AED 25000', schedule: '1 year', description: 'about atm project', startDate: '2 Sep 2018', endDate: '2 Sep 2019' }
    ],
    projects_name:[
        { id: 'PJ1', name: 'IT Project' },
        { id: 'PJ2', name: 'ERP Project' },
        { id: 'PJ3', name: 'ATM Project' }
    ],
    projects_data:[ 
           {  id:1, project_id: 'PJ1', actualCost: 148, plannedCost: 143, actualSchedule: 7, plannedSchedule: 3, date: '2020-09-20' },
           {  id:2, project_id: 'PJ1', actualCost: 356, plannedCost: 361, actualSchedule: 8, plannedSchedule: 4, date: '2020-09-21' },
           {  id:3, project_id: 'PJ1', actualCost: 414, plannedCost: 409, actualSchedule: 9, plannedSchedule: 5, date: '2020-09-22' },
           {  id:4, project_id: 'PJ1', actualCost: 556, plannedCost: 571, actualSchedule: 10, plannedSchedule: 6, date: '2020-09-23' },
           {  id:5, project_id: 'PJ1', actualCost: 695, plannedCost: 690, actualSchedule: 6, plannedSchedule: 3, date: '2020-09-24' },
           {  id:6, project_id: 'PJ1', actualCost: 735, plannedCost: 730, actualSchedule: 4, plannedSchedule: 2, date: '2020-09-25' },
           {  id:7, project_id: 'PJ1', actualCost: 999, plannedCost: 994, actualSchedule: 7, plannedSchedule: 6, date: '2020-09-26' },
           {  id:8, project_id: 'PJ2', actualCost: 123, plannedCost: 128, actualSchedule: 7, plannedSchedule: 2, date: '2020-09-20' },
           {  id:9, project_id: 'PJ2', actualCost: 341, plannedCost: 336, actualSchedule: 8, plannedSchedule: 3, date: '2020-09-21' },
           {  id:10, project_id: 'PJ2', actualCost: 334, plannedCost: 329, actualSchedule: 9, plannedSchedule: 2, date: '2020-09-22' },
           {  id:11, project_id: 'PJ2', actualCost: 556, plannedCost: 556, actualSchedule: 10, plannedSchedule: 3, date: '2020-09-23' },
           {  id:12, project_id: 'PJ2', actualCost: 680, plannedCost: 685, actualSchedule: 11, plannedSchedule: 5, date: '2020-09-24' },
           {  id:13, project_id: 'PJ2', actualCost: 735, plannedCost: 740, actualSchedule: 12, plannedSchedule: 6, date: '2020-09-25' },
           {  id:14, project_id: 'PJ2', actualCost: 945, plannedCost: 940, actualSchedule: 10, plannedSchedule: 4, date: '2020-09-26' },
           {  id:15, project_id: 'PJ3', actualCost: 158, plannedCost: 153, actualSchedule: 12, plannedSchedule: 5, date: '2020-09-20' },
           {  id:16, project_id: 'PJ3', actualCost: 541, plannedCost: 536, actualSchedule: 15, plannedSchedule: 8, date: '2020-09-21' },
           {  id:17, project_id: 'PJ3', actualCost: 414, plannedCost: 409, actualSchedule: 19, plannedSchedule: 9, date: '2020-09-22' },
           {  id:18, project_id: 'PJ3', actualCost: 556, plannedCost: 551, actualSchedule: 15, plannedSchedule: 7, date: '2020-09-23' },
           {  id:19, project_id: 'PJ3', actualCost: 682, plannedCost: 667, actualSchedule: 17, plannedSchedule: 10, date: '2020-09-24' },
           {  id:20, project_id: 'PJ3', actualCost: 535, plannedCost: 530, actualSchedule: 15, plannedSchedule: 10, date: '2020-09-25' },
           {  id:21, project_id: 'PJ3', actualCost: 623, plannedCost: 612, actualSchedule: 18, plannedSchedule: 10, date: '2020-09-26' }
    ]
};


router.get( '/', function( req, res ) {
    
    res.json( projects.projects_name );
});

router.get( '/:id/details', function( req, res ) {

    let detailsArray = [ ];
    let details  = ( projects.projects_details.find((item) => item.project_id === req.params.id) );
    //-----------------------------
    let data  = ( projects.projects_data.filter((item) => item.project_id === req.params.id) );
    let actualCost = [ ];
    let plannedCost = [ ];
    let actualSchedule = [ ];
    let plannedSchedule = [ ];
    let project_id;

    for ( let params of data ) {
        project_id = params.project_id;
        actualCost.push( params.actualCost );
        plannedCost.push( params.plannedCost );
        actualSchedule.push( params.actualSchedule );
        plannedSchedule.push (params.plannedSchedule );
       
    }
    let diff = Math.max( (actualCost.slice(-1) - plannedCost.slice(-1)), (actualSchedule.slice(-1) - plannedSchedule.slice(-1)) );
    let projectStatus = '';

    switch (true) {
        case ( diff > 10 ):
            projectStatus = 'Critical';
            break;  
        case (  diff > 5 && diff <= 10 ):
            projectStatus = 'Delayed';
            break;
        default:
            projectStatus = 'OnTrack';
    }
    details = {...details, status: projectStatus}
    //-----------------------------
    
    detailsArray.push( details );
    stringRepeat( detailsArray, 'description' );
    res.json( details );
});

router.get( '/:id/data', function( req, res ) {

    let data  = ( projects.projects_data.filter((item) => item.project_id === req.params.id) );
    let dataArray = [ ] ;
    let actualCost = [ ];
    let plannedCost = [ ];
    let actualSchedule = [ ];
    let plannedSchedule = [ ];
    let dateArray = [ ];
    let date;
    let project_id;

    for ( let params of data ) {
        project_id = params.project_id;
        actualCost.push(params.actualCost);
        plannedCost.push(params.plannedCost);
        actualSchedule.push(params.actualSchedule);
        plannedSchedule.push(params.plannedSchedule);
        date = params.date.substring(5, params.date.length);
        dateArray.push( date );
    }
    dataArray.push( {project_id: project_id, actualCost: actualCost, plannedCost: plannedCost, actualSchedule: actualSchedule, plannedSchedule: plannedSchedule, date: dateArray} );
    res.json( dataArray[0] );
});

 module.exports = router;
