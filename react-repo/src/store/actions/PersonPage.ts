/*
*  Actions Person-action.tsx
*
* @author Anusree
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';


export const addPerson = ( data: any ) => {
    return {
        type: actionTypes.ADD_PERSON,
        personData: data
    }
}

export const removePerson = ( id: any ) => {
    return {
        type: actionTypes.REMOVE_PERSON,
        personId: id   
    }
}
