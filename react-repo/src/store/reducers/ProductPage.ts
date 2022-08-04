/*
* Reducers ProductPage.ts.
*
* @author Vineetha
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


const  DEFAULT_CATEGORY_ID = null;

//STATE
const initialState = {
    products: null,
    categories: null,
    selectedCategory: DEFAULT_CATEGORY_ID,
    productName:null,
    noData: false,
    error: null
 }

//REDUCER
const productPageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INIT_PRODUCTPAGE:
            return updateObject( state, {products: action.products, categories: action.categories, selectedCategory: action.selectedCategory, productName: action.productName, error: null, noData: false} );
        case ActionType.UPDATE_PRODUCTPAGE:
            return updateObject( state, {products: action.products, error: null, noData: false} );
        case ActionType.SET_SELECTED_PRODUCTCATEGORY:
            return updateObject( state, {products: action.products, selectedCategory: action.selectedCategory} );
        case ActionType.PRODUCT_SEARCH:
            return updateObject( state, {products: action.products} );
        case ActionType.FETCH_PRODUCTPAGE_FAILED:
            return updateObject( state, {error: action.error} );
        case ActionType.FETCH_PRODUCTPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default productPageReducer;
