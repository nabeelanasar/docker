import { combineReducers } from 'redux';

import printReducer from './reducers/PrintPage';
import personReducer from './reducers/PersonPage';
import blogsPageReducer from './reducers/BlogsPage';
import blogDetailPageReducer from './reducers/BlogDetail';
import servicePageReducer from './reducers/ServicesPage';
import serviceDetailPageReducer from './reducers/ServiceDetail';
import covidPageReducer from './reducers/CovidPage';
import projectPageReducer from './reducers/ProjectPage';
import productsPageReducer from './reducers/ProductPage';
import authReducer from './reducers/Auth';
import * as actionTypes from './actions/actionTypes';


// Redux: Combine Reducers
const appReducer = combineReducers({
    print: printReducer,
    person: personReducer,
    blogPage: blogsPageReducer,
    blogDetailPage: blogDetailPageReducer,
    servicePage: servicePageReducer,
    serviceDetailPage: serviceDetailPageReducer,
    covidPage: covidPageReducer,
    projectPage: projectPageReducer,
    productPage: productsPageReducer,
    auth: authReducer
})

const rootReducer = ( state: any, action: any ) => {

    // when a logout action is dispatched, we can reset redux state
    if ( action.type === actionTypes.AUTH_LOGOUT ) {
      state = undefined;
    }
  
    return appReducer( state, action );
};

export default rootReducer;
