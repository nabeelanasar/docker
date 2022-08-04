/*
*  Actions BlogPage.tsx
*
* @author Anisha
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { blogsURL } from '../../axios';


const DEFAULT_CATEGORY_ID = 0;
const DEFAULT_CATEGORY_NAME = 'All';

export const setBlogPage = ( blogs: any, categories: any, selectedCategory: any ) => {

    return {
        type: actionTypes.INIT_BLOGPAGE,
        blogs: blogs,
        categories: categories,
        selectedCategory: selectedCategory
    }
}

export const initBlogsPage = ( selectedCategory: string ) => {

    return ( dispatch: any ) => {
        const urls = [
            blogsURL,
            `${blogsURL}?q=categories`
        ];
        
        const requests = urls.map(url => axios.get(url));

        Promise.all( requests )
            .then( responses => {
                const [ blogs, categories] = [...responses];
                const updatedCategories: any[] = [ {id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME}, ...categories.data.data ]; 
                if ( blogs.data.data.length > 0 ) {
                    dispatch( setBlogPage(blogs.data.data, updatedCategories, selectedCategory) );
                } else {
                    dispatch( noDataPage( true ) );
                }
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchBlogPageFailed( err ) );
            })
    }
}

export const setUpdateBlogPage = ( blogs: any ) => {

    return {
        type: actionTypes.UPDATE_BLOGPAGE,
        blogs: blogs
    }
}

export const updateBlogPage = ( selectedCategory: any ) => {

    return ( dispatch: any ) => {
       
        let api: string = blogsURL;
            
        if ( selectedCategory !== DEFAULT_CATEGORY_ID ) {

            api =`${blogsURL}?blogsCategoryId=${selectedCategory}`;
        } 
        axios.get( api )
            .then( response => { 
                if ( response.data.data.length > 0 ) {
                    dispatch( setUpdateBlogPage( response.data.data ) );
                } else {
                    dispatch( noDataPage( true ) );
                }
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchBlogPageFailed( err ) );
            });
    }
}


export const setSelectedCategory = ( selectedCategory: any ) => {

    return {
        type: actionTypes.SET_SELECTED_CATEGORY,
        blogs: null,
        selectedCategory: selectedCategory 
    }
}

export const fetchBlogPageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_BLOGPAGE_FAILED,
        error: errorData  
    }
}

export const noDataPage = ( noData: boolean ) => {
    return {
        type: actionTypes.FETCH_BLOGPAGE_EMPTY,
        noData: noData   
    }
}
