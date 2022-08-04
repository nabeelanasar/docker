/*
* Reducers ProjectPage.ts.
*
* @author Anusree
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


const initialState = {
    details: null,
    data: null,
    projects: null,
    selectedProjectId: null,
    noData: false,
    error: null
 }

 //REDUCER
const projectPageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.SET_SELECTED_PROJECT:
            return updateObject( state, {details: action.details, data: action.data, selectedProjectId: action.selectedProjectId} );
        case ActionType.INIT_PROJECTPAGE:
            return updateObject( state, {details: action.details, data: action.data, projects: action.projects, selectedProjectId: action.selectedProjectId, error: null, noData: false} );
        case ActionType.UPDATE_PROJECT_DETAILS:
            return updateObject( state, {details: action.details, data: action.data, selectedProjectId: action.selectedProjectId, error: null, noData: false} );
        case ActionType.FETCH_PROJECTPAGE_FAILED:
            return updateObject( state, {error: action.error} );
        case ActionType.FETCH_PROJECTPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default projectPageReducer;