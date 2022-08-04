/*
* Reducer BlogPage.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


const  DEFAULT_CATEGORY_ID = 0;

//STATE
const initialState = {
    blogs: null,
    categories: null,
    selectedCategory: DEFAULT_CATEGORY_ID,
    noData: false,
    error: null
 }

//REDUCER
const blogPageReducer = ( state = initialState , action: any ) => {
    switch( action.type ) {
    case ActionType.INIT_BLOGPAGE:
        return updateObject(state, {blogs: action.blogs, categories: action.categories, selectedCategory: action.selectedCategory, error: null, noData: false});
    case ActionType.UPDATE_BLOGPAGE:
        return updateObject(state, {blogs: action.blogs, error: null, noData: false});
    case ActionType.SET_SELECTED_CATEGORY:
        return updateObject(state, {blogs: action.blogs, selectedCategory: action.selectedCategory});
    case ActionType.FETCH_BLOGPAGE_FAILED:
        return updateObject(state, {error: action.error});
    case ActionType.FETCH_BLOGPAGE_EMPTY:
        return updateObject( state, {noData: action.noData} );
    default:
        return state;
    }
}

export default blogPageReducer;
