/*
* Action ProductPage.tsx
*
* @author Vineetha
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { productsURL } from '../../axios';

const DEFAULT_CATEGORY_ID = 0;
const DEFAULT_CATEGORY_NAME = 'All';

export const setInitProductPage = ( products: any, categories: any ) => {
    return {
        type: actionTypes.INIT_PRODUCTPAGE,
        products: products,
        categories: categories    
    }
}

export const initProductPage = ( selectedCategoryId: any ) => {
    return ( dispatch: any ) => {
        const urls = [
            `${productsURL}`,
            `${productsURL}?q=categories`
        ];

        const requests = urls.map(url => axios.get(url));

        Promise.all( requests )
            .then( responses => {
                const [ products, categories ] = [...responses];
                const allCategories: any[] = [ {id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME}, ...categories.data.data ];
                if ( products.data.data.length > 0 ) {
                    dispatch( setInitProductPage(products.data.data, allCategories) ); 
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
                dispatch( fetchProductPageFailed( err ) );
            })
    }
}

export const setUpdateProductPage = ( products: any ) => {
    return {
        type: actionTypes.UPDATE_PRODUCTPAGE,
        products: products        
    }
}

export const updateProductPage = ( selectedCategoryId: any ) => {

    return ( dispatch: any ) => {

        let  api: string = productsURL;
        
        if ( selectedCategoryId !== DEFAULT_CATEGORY_ID ) { 
            api = `${productsURL}?productsCategoryId=${selectedCategoryId}`;
        }
        axios.get( api )
            .then( response => {
                if ( response.data.data.length > 0 ) {
                    dispatch( setUpdateProductPage(response.data.data) );
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
                dispatch( fetchProductPageFailed( err ) );
            });
    }
}

export const setSelectedProductCategory = ( selectedCategory: any ) => {
    return {
        type: actionTypes.SET_SELECTED_PRODUCTCATEGORY,
        products: null,
        selectedCategory: selectedCategory 
    }
}

export const setProductSearch = ( products: any ) => {
    return {
        type: actionTypes.PRODUCT_SEARCH,
        products: products
    }
}

export const productSearch = ( products: any  ) => {
   
    return ( dispatch: any ) => {
       dispatch(setProductSearch(products))
    }
}

export const fetchProductPageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_PRODUCTPAGE_FAILED,
        error: errorData   
    }
}

export const noDataPage = ( noData: boolean ) => {
    return {
        type: actionTypes.FETCH_PRODUCTPAGE_EMPTY,
        noData: noData   
    }
}
