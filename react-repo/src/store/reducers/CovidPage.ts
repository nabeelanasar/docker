/*
* Reducer CovidPage.ts.
*
* @author Vishnu
* @version 1.0.0
*/

import * as ActionType from '../actions/actionTypes';
import { updateObject } from '../../shared/shared';


const initialState = {
    countries: null,
    dailySummary: null,
    news: null,
    data: null,
    error: null,
    noData: false,
    selectedCountryId: null
 }

 //REDUCER
const covidPageReducer = ( state = initialState , action: any ) => {

    switch( action.type ) {
        case ActionType.INIT_COVIDPAGE:
            return updateObject( state, {countries: action.countries, dailySummary: action.dailySummary, news: action.news, data: action.data, error: null, noData: false, selectedCountryId: action.selectedCountryId} );
        case ActionType.COVID_UPDATED_DETAILS:
            return updateObject( state, {dailySummary: action.dailySummary, news: action.news, data: action.data, error: null, noData: false, selectedCountryId: action.selectedCountryId} );
        case ActionType.SET_SELECTED_COUNTRY:
            return updateObject( state, {dailySummary: action.dailySummary, news: action.news,data: action.data, selectedCountryId: action.selectedCountryId} );
        case ActionType.FETCH_COVIDPAGE_FAILED:
            return  updateObject( state, {error: action.error} );
        case ActionType.FETCH_COVIDPAGE_EMPTY:
            return updateObject( state, {noData: action.noData} );
        default:
            return state;
    }
}

export default covidPageReducer;