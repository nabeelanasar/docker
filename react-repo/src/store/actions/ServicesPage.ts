/*
* Action ServicePage.tsx.
*
* @author Viji
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { servicesURL } from '../../axios';


const  DEFAULT_CATEGORY_ID = 0;
const  DEFAULT_CATEGORY_NAME = 'All';

export const setServicePage = ( services: any, categories: any, selectedCategory: any ) => {
    return {
        type: actionTypes.INIT_SERVICEPAGE,
        services: services,
        categories: categories,
        selectedCategory: selectedCategory
    }
}

export const noDataPage = ( noData: boolean ) => {
    return {
        type: actionTypes.FETCH_SERVICEPAGE_EMPTY,
        noData: noData   
    }
}

export const fetchServicePageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_SERVICEPAGE_FAILED,
        error: errorData   
    }
}

export const initServicesPage = ( selectedCategory: any ) => {
    return ( dispatch: any ) => {
        
        const urls = [
            servicesURL,
            `${servicesURL}?q=categories`
        ];
       
        const requests = urls.map( url => axios.get(url) );

        Promise.all( requests )
            .then( responses => {
                const [ services, categories ] = [...responses];
                const updatedCategories: any[] = [ {id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME}, ...categories.data.data ]; 
                if ( services.data.data.length > 0 ) {
                    dispatch( setServicePage(services.data.data, updatedCategories, selectedCategory) );
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
                dispatch( fetchServicePageFailed( err ) );
            })
    }
}

export const setUpdateServicePage = ( services: any ) => {
    return {
        type: actionTypes.UPDATE_SERVICEPAGE,
        services: services
   }
}

export const updateServicePage = ( selectedCategory: any ) => {
    return ( dispatch: any ) => {

        let api: string  = servicesURL;
            
        if ( selectedCategory !== DEFAULT_CATEGORY_ID ) {

            api= `${servicesURL}?servicesCategoryId=${selectedCategory}`;
        }

        axios.get( api )
            .then( response => {
                if ( response.data.data.length > 0 ) {
                    dispatch( setUpdateServicePage(response.data.data ) );
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
                dispatch( fetchServicePageFailed( err ) );
            });   
    }
}

export const setServiceSelectedCategory = ( selectedCategory: any ) => {
    return {
        type: actionTypes.SET_SELECTED_CATEGORY,
        services: null,
        selectedCategory: selectedCategory 
    }
}
