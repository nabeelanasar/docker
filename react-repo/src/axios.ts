/*
* axios.tsx
*
* @author Anusree
* @version 1.0.0
*/

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import createStore from './store/createStore';


// Set instance specific axios configuration
const instance = axios.create( {

    // baseURL: 'https://node-cicd-repo-app.herokuapp.com/'
    //baseURL: 'http://localhost:8000/'
    baseURL: 'http://localhost:3030/'
});

// instance.defaults.headers.common[ 'Authorization' ] = 'AUTH TOCKEN';

instance.interceptors.request.use( (request: AxiosRequestConfig) => {
    
    // Attach token to headers on requests
    request.headers['Authorization'] = `Bearer ${createStore.getState().auth.token}`;
    return request;
});

instance.interceptors.response.use( (response: AxiosResponse) => {
    
    return response;
});

export const authURL= '/authentication';
export const usersURL= '/users';
export const blogsURL= '/api/v1/blogs';
export const covidURL= '/api/v1/covid';
export const servicesURL= '/api/v1/services';
export const projectsURL= '/api/v1/projects';
export const productsURL= '/api/v1/products';

export default instance;
