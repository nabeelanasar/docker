import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';


// Redux: Add Middleware
const logger = ( store: any ) => {
    return ( next: any ) => {
        return ( action: any ) => {
            //console.log( "[MIddleWare] Dispatching", action );
            const result = next( action );
           //console.log( "[MIddleWare] Updated State", store.getState( ) );
            return result;
        }
    }
}

// Redux: Create Store and apply middleware
// Redux: Integrate Redux-Dev-Tool-Extension
const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)) );

export default store;
