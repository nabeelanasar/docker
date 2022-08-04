/*
*  Actions Print-action.tsx
*
* @author Viji
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';


export const increment = ( val: any ) => {
    return {
        type: actionTypes.INCREMENT,
        value: val
    }
}

export const decrement = ( val: any ) => {
    return {
        type: actionTypes.DECREMENT,
        value: val   
    }
}
