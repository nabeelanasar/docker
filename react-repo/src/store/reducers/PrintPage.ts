/*
* Print-reducer.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


//STATE
const initialState = {
    counter: 10
}

//REDUCER
const printReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INCREMENT:
            return updateObject( state, {counter: state.counter + action.value} );
        case ActionType.DECREMENT:
            return updateObject( state, {counter: state.counter - action.value} );
        default:
            return state;
    }
}

export default printReducer;