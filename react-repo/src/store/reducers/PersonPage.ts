/*
* Person-reducer.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


//STATE
const initialState = {
    persons: []
}

//REDUCER
const personReducer = ( state: any = initialState , action: any ) => {

    switch( action.type ) {
        case actionType.ADD_PERSON:
            const newPerson = {
                id: Math.random( ),
                name: action.personData.name,
                age: action.personData.age
            }
            return updateObject( state, {persons: state.persons.concat( newPerson )} );
        case actionType.REMOVE_PERSON:
            const updatedPersons = state.persons.filter((person: any) => person.id !== action.personId);
            return updateObject( state, {persons: updatedPersons} );
        default:
            return state;
    }
}

export default personReducer;