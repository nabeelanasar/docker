/*
 * covid.js
 * 
 * @author Vishnu
 * @version 1.0.0
 */

var express = require( 'express' );
var stringRepeat = require( './shared');
var router = express.Router( );

var covid = {
    covid_daily_summary:[
        { id: 1, countryId: 'CU1', new_confirmed: 102, total_confirmed: 1102, new_deaths: 10, total_deaths: 55, new_recovered: 92, total_recovered: 806, date: '2020-09-19' },
        { id: 2, countryId: 'CU1', new_confirmed: 112, total_confirmed: 1202, new_deaths: 8, total_deaths: 65, new_recovered: 102, total_recovered: 906, date: '2020-09-20' },
        { id: 3, countryId: 'CU1', new_confirmed: 222, total_confirmed: 1402, new_deaths: 25, total_deaths: 95, new_recovered: 92, total_recovered: 1106, date: '2020-09-21' },
        { id: 4, countryId: 'CU1', new_confirmed: 252, total_confirmed: 1702, new_deaths: 11, total_deaths: 105, new_recovered: 112, total_recovered: 1206, date: '2020-09-22' },
        { id: 5, countryId: 'CU1', new_confirmed: 302, total_confirmed: 2002, new_deaths: 6, total_deaths: 111, new_recovered: 124, total_recovered: 1406, date: '2020-09-23' },
        { id: 6, countryId: 'CU1', new_confirmed: 312, total_confirmed: 2302, new_deaths: 6, total_deaths: 117, new_recovered: 124, total_recovered: 1606, date: '2020-09-24' },
        { id: 7, countryId: 'CU1', new_confirmed: 540, total_confirmed: 2902, new_deaths: 18, total_deaths: 124, new_recovered: 92, total_recovered: 1706, date: '2020-09-25' },
        { id: 8, countryId: 'CU2', new_confirmed: 100, total_confirmed: 655, new_deaths: 5, total_deaths: 21, new_recovered: 55, total_recovered: 606, date: '2020-09-19' },
        { id: 9, countryId: 'CU2', new_confirmed: 101, total_confirmed: 755, new_deaths: 6, total_deaths: 26, new_recovered: 65, total_recovered: 656, date: '2020-09-20' },
        { id: 10, countryId: 'CU2', new_confirmed: 200, total_confirmed: 955, new_deaths: 12, total_deaths: 38, new_recovered: 54, total_recovered: 706, date: '2020-09-21' },
        { id: 11, countryId: 'CU2', new_confirmed: 211, total_confirmed: 1055, new_deaths: 12, total_deaths: 50, new_recovered: 75, total_recovered: 776, date: '2020-09-22' },
        { id: 12, countryId: 'CU2', new_confirmed: 115, total_confirmed: 1160, new_deaths: 5, total_deaths: 55, new_recovered: 85, total_recovered: 856, date: '2020-09-23' },
        { id: 13, countryId: 'CU2', new_confirmed: 100, total_confirmed: 1200, new_deaths: 7, total_deaths: 62, new_recovered: 55, total_recovered: 906, date: '2020-09-24' },
        { id: 14, countryId: 'CU2', new_confirmed: 10, total_confirmed: 1210, new_deaths: 9, total_deaths: 69, new_recovered: 65, total_recovered: 966, date: '2020-09-25' },
        { id: 15, countryId: 'CU3', new_confirmed: 22, total_confirmed: 500, new_deaths: 3, total_deaths: 78, new_recovered: 92, total_recovered: 321, date: '2020-09-19' },
        { id: 16, countryId: 'CU3', new_confirmed: 54, total_confirmed: 522, new_deaths: 5, total_deaths: 81, new_recovered: 95, total_recovered: 421, date: '2020-09-20' },
        { id: 17, countryId: 'CU3', new_confirmed: 64, total_confirmed: 572, new_deaths: 1, total_deaths: 86, new_recovered: 22, total_recovered: 521, date: '2020-09-21' },
        { id: 18, countryId: 'CU3', new_confirmed: 45, total_confirmed: 612, new_deaths: 2, total_deaths: 87, new_recovered: 45, total_recovered: 561, date: '2020-09-22' },
        { id: 19, countryId: 'CU3', new_confirmed: 35, total_confirmed: 645, new_deaths: 5, total_deaths: 92, new_recovered: 45, total_recovered: 601, date: '2020-09-23' },
        { id: 20, countryId: 'CU3', new_confirmed: 38, total_confirmed: 675, new_deaths: 6, total_deaths: 98, new_recovered: 75, total_recovered: 675, date: '2020-09-24' },
        { id: 21, countryId: 'CU3', new_confirmed: 22, total_confirmed: 697, new_deaths: 2, total_deaths: 100, new_recovered: 12, total_recovered: 687, date: '2020-09-25' }
    ],
    countries:[
        { id: "CU1", name: "INDIA" },
        { id: "CU2", name: "CHINA" },
        { id: "CU3", name: "JAPAN" }
    ],
    news:[
        { id: 'N1', date: '2020-09-25T00:00:00Z', content: 'India to produce covid-19 vaccine' },
        { id: 'N2', date: '2020-09-25T00:00:00Z', content: 'China to produce covid-19 vaccine' },
        { id: 'N3', date: '2020-09-25T00:00:00Z', content: 'Japan to produce covid-19 vaccine' }
    ]
};

router.get( '/news', function( req, res ) {
    
    let newsArray = [ ];
    let news  = ( covid.news.find((item) => item.date === '2020-09-25T00:00:00Z' ) );
    newsArray.push( news );
    stringRepeat( newsArray, 'content' );
    res.json( news ); 
});

router.get( '/countries', function( req, res ) {
    
    res.json( covid.countries );
});

router.get( '/:id&limit=:number', function( req, res ) {

    let covidData  = ( covid.covid_daily_summary.filter((item) => item.countryId === req.params.id) );
    let dataArray = [ ] ;
    let confirmedArray = [ ];
    let recoveredArray = [ ];
    let deathsArray = [ ];
    let dateArr = [ ];
    let countryId;
    let date;

    for ( let params of covidData ) {
        countryId = params.countryId;
        confirmedArray.push(params.new_confirmed);
        recoveredArray.push(params.new_recovered);
        deathsArray.push(params.new_deaths);
        date = params.date.substring(5, params.date.length);
        dateArr.push( date );
    }
    dataArray.push( {countryId: countryId, confirmed: confirmedArray, recovered: recoveredArray, deaths: deathsArray, date: dateArr} );
    res.json( dataArray[0] );
});

router.get( '/:id', function( req, res ) {

    let dailySummary  = ( covid.covid_daily_summary.find((item) => req.params.id === item.countryId ) );
    res.json( dailySummary );
});

module.exports = router;
