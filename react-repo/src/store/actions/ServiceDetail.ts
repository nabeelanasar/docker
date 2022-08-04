/*
* Action ServiceDetailPage.tsx.
*
* @author Viji
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { servicesURL } from '../../axios';

export const setServiceDetailPage = ( servicesDetail: any, selectedService: any ) => {
    return {
        type: actionTypes.INIT_SERVICEDETAILPAGE,
        service: servicesDetail,
        selectedService: selectedService
    }
}

export const fetchServiceDetailPageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_SERVICEDETAILPAGE_FAILED,
        error: errorData   
    }
}

export const initServiceDetailPage = ( selectedService: any ) => {
    return ( dispatch: any ) => {
        
    const api: any = `${servicesURL}/${ selectedService }`;
    axios.get( api )
   
    .then( response => {
        // console.log( response )
        dispatch( setServiceDetailPage(response.data, selectedService) )
    })
    .catch( (error: any) => {
        const errorData = {...error.response.data};
        const err = {
            message: errorData.message,
            code: errorData.code
        }
        dispatch( fetchServiceDetailPageFailed( err ) );
    });
    }
}
