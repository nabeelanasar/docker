/*
* Reducer serviceDetailPage.ts.
*
* @author Viji
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


//STATE
const initialState = {
    service: null,
    selectedService: null,
    noData: false,
    error: null
 }

 //REDUCER
const serviceDetailPageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INIT_SERVICEDETAILPAGE:
            return updateObject( state, {service: action.service,selectedService: action.selectedService,error: null, noData: false} );       
        case ActionType.FETCH_SERVICEDETAILPAGE_FAILED:
            return updateObject( state, {error: action.error} );
        case ActionType.FETCH_SERVICEDETAILPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default serviceDetailPageReducer;
