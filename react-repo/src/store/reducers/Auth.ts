/*
* Reducer Auth.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


// STATE (initial)
const initialState = {
    token: null,
    userId: null,
    user: null,
    error: null,
    authenticating: false,
    authRedirectPath: '/'
}

// REDUCER
const authReducer = ( state: any = initialState, action: any ) => {

    switch ( action.type ) {
        
        case actionTypes.AUTH_START: 
            return updateObject( state, {authenticating: true, error: null} );
        case actionTypes.AUTH_SUCCESS: 
            return updateObject( state, {token: action.tokenId, userId: action.userId, user: action.user, error: null, authenticating: false} );
        case actionTypes.AUTH_FAIL:
            return updateObject( state, {token: null, userId: null, error: action.error, authenticating: false} );
        case actionTypes.AUTH_LOGOUT:
            return updateObject( state, {token: null, userId: null} );
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return updateObject( state, {authRedirectPath: action.path} );
        default:
            return state;
    }
}

export default authReducer;
