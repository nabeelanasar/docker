/*
* index.tsx
*
* @author Anusree
* @version 1.0.0
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import createStore from './store/createStore';

// Import bootstrap-react css
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import fomantic-ui css
import './assets/fomantic/dist/semantic.css'


const app = (
    <Provider store={createStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
