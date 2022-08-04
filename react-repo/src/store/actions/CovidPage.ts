/*
* Action CovidPage.tsx
*
* @author Vishnu
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { covidURL } from '../../axios';


export const setSelectedCountry= ( selectedCountryId: any ) => {
    
    return {
        type: actionTypes.SET_SELECTED_COUNTRY,
        dailySummary: null,
        news: null,
        data: null,
        countries: null,
        selectedCountryId: selectedCountryId
    }
}

const rearrangeChartData = ( data: any ) => {

    const dataArray = [ ] ;
    const confirmedArray = [ ];
    const recoveredArray = [ ];
    const deathsArray = [ ];
    const dateArray = [ ];
    let countryId;
    let date;

    for ( const params of data ) {
        countryId = params.covidCountryId;
        confirmedArray.push(params.newConfirmed);
        recoveredArray.push(params.newRecovered);
        deathsArray.push(params.newDeaths);
        date = params.date.substring(5, 10);
        dateArray.push( date );
    }
    dataArray.push( {countryId: countryId, confirmed: confirmedArray, recovered: recoveredArray, deaths: deathsArray, date: dateArray} );

    return ( dataArray[0] );
}

export const setCovidPage = ( news: any, data: any, countries: any, selectedCountryId: any ) => {
   
    const graphsData = data.length > 0 ? rearrangeChartData(data): null;
    
    return {
        type: actionTypes.INIT_COVIDPAGE,
        dailySummary: data.slice(-1)[0],
        news: news[0],
        data: graphsData,
        countries: countries.length > 0 ? countries: null,
        selectedCountryId: selectedCountryId 
    }
}



export const setUpdatedCovidDetails = (news: any, data: any, selectedCountryId: any ) => {

    const graphsData = data.length > 0 ? rearrangeChartData(data): null;

    return {
        type: actionTypes.COVID_UPDATED_DETAILS,
        dailySummary: data.slice(-1)[0],
        news: news[0],
        data: graphsData,
        selectedCountryId: selectedCountryId 
    }
}

export const initCovidPage = ( selectedCountryId: any ) => {

    return ( dispatch: any ) => {

        const urls = [
            `${covidURL}?q=countries`
        ];

        const requests = urls.map(url => axios.get(url));

        Promise.all( requests )
            .then( responses => {
                const [ countries ] = [...responses];
                if( countries?.data?.data[0] ) {
                    selectedCountryId = countries.data.data[0].id;
                    const urls = [
                        `${covidURL}?q=news&$sort[date]=-1&$limit=1`,
                        `${covidURL}/?covidCountryId=${selectedCountryId}&$limit=7&$sort[date]=1`
                    ];

                    const requests = urls.map(url => axios.get(url));

                    Promise.all( requests )
                        .then( responses => {
                            const [ news, chartData ] = [...responses];
                            selectedCountryId = ( chartData.data.data ) ? selectedCountryId : null;
                            dispatch( setCovidPage( news.data.data, chartData.data.data,  countries.data.data, selectedCountryId) );
                        })
                        .catch( (error: any) => {
                            const errorData = {...error.response.data};
                            const err = {
                                message: errorData.message,
                                code: errorData.code
                            }
                            dispatch( fetchCovidPageFailed( err ) );
                        })
                } else {
                    dispatch( noDataPage( true ) );
                }
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchCovidPageFailed( err ) );
            })
    }
}

export const updatedCovidDetails = ( selectedCountryId: string ) => {

    return ( dispatch: any ) => {
        const urls = [
            `${covidURL}?q=news&$sort[date]=-1&$limit=1`,
            `${covidURL}/?covidCountryId=${selectedCountryId}&$limit=7&$sort[date]=1`
        ];

        const requests = urls.map(url => axios.get(url));

        Promise.all( requests )
            .then( responses => {
                const [ news, chartData ] = [...responses];
                if ( chartData.data.data.length > 0 ) {
                    dispatch( setUpdatedCovidDetails( news.data.data, chartData.data.data, selectedCountryId) );
                } else {
                    dispatch( noDataPage( true ) );
                } 
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchCovidPageFailed( err ) );
            })
    }
}

export const fetchCovidPageFailed = ( errorData: any ) => {

    return {
        type: actionTypes.FETCH_COVIDPAGE_FAILED,
        error: errorData   
    }
}

export const noDataPage = ( noData: boolean ) => {
    return {
        type: actionTypes.FETCH_COVIDPAGE_EMPTY,
        noData: noData   
    }
}
