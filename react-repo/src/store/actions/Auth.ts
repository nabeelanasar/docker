/*
* Actions Auth.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';

import axios, { usersURL, authURL } from '../../axios';


export const authSuccess = ( authData: any ) => {
    
    // Store token in local storage
    // const expirationDate = new Date(new Date().getTime() + authData.expiresIn * 1000);
    // localStorage.setItem( 'token', authData.accessToken );
    // localStorage.setItem( 'expirationDate', expirationDate.toDateString() );

    return {
        type: actionTypes.AUTH_SUCCESS,
        tokenId: authData.tokenId,
        userId: authData.userId,
        user: authData.user
    };
}

export const authFail = ( error: any ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const authStart = ( ) => {
    return {
        type: actionTypes.AUTH_START
    };
}

// Auto Logout if expiration reached!
export const checkAuthTimeout = ( expirationTime: number ) => {

    return ( dispatch: any ) => {
        // automatically set token in state to null
        // after expiry time is reached (using a timer)!
        setTimeout( ( ) => {
            dispatch( logout() );
        }, expirationTime);
    }
}

export const logout = ( ) => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const authenticate = ( payload: any ) => {
    return ( dispatch: any ) => {
        dispatch( authStart() );

        // Authenticate with the local email/password strategy 
        const api: string = authURL;
        axios.post( api,
        {
            strategy: 'local',
            email: payload.email,
            password: payload.password
        })
        .then( (response: any) => {

            // Logged in
            // console.log('Authentication success', response.data);
            dispatch( authSuccess({tokenId: response.data.accessToken, userId: response.data.id, user: response.data.email}) );
            
            // Auto Logout
            dispatch( checkAuthTimeout(Date.now()) );
            // dispatch( checkAuthTimeout(response.data.expiresIn) );
        })
        .catch( (error: any) => {
            const e = {...error.response.data};
            const err = {
                message: e.message,
                code: e.code
            }
            // console.log('Authentication error', err);
            // Show Login page (potentially with a message)
            dispatch( authFail(err) );
        });
    };
}

export const signUp = ( payload: any ) => {
    return ( dispatch: any ) => {
        dispatch( authStart() );
        
        // Signup the new user 
        let api: string = usersURL;
        axios.post( api,
        {
            firstName: payload.firstName,
            lastName: payload.lastName,
            phone: payload.phone,
            email: payload.email,
            password: payload.password
        })
        .then( (response: any) => {
            // Logged in
            console.log('SignUp success', response.data);
            dispatch( authSuccess({tokenId: response.data.accessToken, userId: response.data.id, user: response.data.email}) );

            // Auto Logout
            // dispatch( checkAuthTimeout(response.data.expiresIn) );
            dispatch( checkAuthTimeout(Date.now()) );
        })
        .catch( (error: any) => {
            let e = {...error.response.data};
            const err = {
                message: e.message,
                code: e.code
            }
            console.log('SignUp error', err);
            // Show SignUp page (potentially with a message)
            dispatch( authFail(err) );
        });
    };
}

export const setAuthRedirectPath = ( path: string ) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
}
