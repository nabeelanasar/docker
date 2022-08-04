/*
* Reducer BlogDetailPage.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


//STATE
const initialState = {
    blog: null,
    comments: null,
    selectedBlog: null,
    noData: false,
    error: null
 }

//REDUCER
const blogDetailPageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INIT_BLOGDETAILPAGE:
            return updateObject ( state, {blog: action.blog, comments: action.comments, selectedBlog: action.selectedBlog, error: null, noData: false} );
        case ActionType.ADD_COMMENTS:
            return updateObject( state, {comments: action.comments, error: null, noData: false} );
        case ActionType.FETCH_BLOGDETAILPAGE_FAILED:
            return updateObject( state, {error: action.error} );
        case ActionType.FETCH_BLOGDETAILPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default blogDetailPageReducer;
