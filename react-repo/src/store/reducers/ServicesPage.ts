/*
* Reducer servicePage.ts.
*
* @author Viji
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


const  DEFAULT_CATEGORY_ID = 0;

//STATE
const initialState = {
    services: null,
    categories: null,
    selectedCategory: DEFAULT_CATEGORY_ID,
    noData: false,
    error: null
 }

//REDUCER
const servicePageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INIT_SERVICEPAGE:
            return updateObject( state, {services: action.services, categories: action.categories, selectedCategory: action.selectedCategory, error: null, noData: false} );
        case ActionType.UPDATE_SERVICEPAGE:
            return updateObject( state, {services: action.services,error: null, noData: false} );
        case ActionType.SET_SELECTED_CATEGORY:
            return updateObject( state, {services: action.services,selectedCategory: action.selectedCategory} );
        case ActionType.FETCH_SERVICEPAGE_FAILED:
            return updateObject( state, {error: action.error} );
        case ActionType.FETCH_SERVICEPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default servicePageReducer;