/*
* Actions BlogDetail.ts.
*
* @author Anisha
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { blogsURL } from '../../axios';


export const setBlogDetailPage = ( blogs: any, comments: any, selectedBlog: any ) => {
    return {
        type: actionTypes.INIT_BLOGDETAILPAGE,
        blog: blogs,
        comments: comments,
        selectedBlog: selectedBlog
    }
}

export const initBlogDetailPage = ( selectedBlog: any) => {
    return ( dispatch: any ) => {
        const urls = [
            `${blogsURL}/${ selectedBlog }`
        ];
        
        const requests = urls.map(url => axios.get(url));
     
        Promise.all( requests )
            .then( responses => {
                const [ blog ] = [...responses];
                dispatch( setBlogDetailPage( blog.data, blog.data.comments, selectedBlog) );
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchBlogDetailPageFailed( err ) );
            })
        
    }
}

export const setAddComments = ( comments: any ) => {
    return {
        type: actionTypes.ADD_COMMENTS,
        comments: comments
    }
}

export const addComments = ( comments: any, blogId: any, userName: any, comment: any ) => {
    return ( dispatch: any ) => {
       
        const blogComments:any = comments;

        const api: string = `${blogsURL}?q=comments`;

            axios.post( api,
            {
                email: userName, 
                comment: comment, 
                blogId: blogId
            })
            .then( response => {
                const updateBlogComment = blogComments.concat(response.data);
                dispatch( setAddComments( updateBlogComment ) );
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchBlogDetailPageFailed( err ) );
            });
    }
}

export const fetchBlogDetailPageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_BLOGDETAILPAGE_FAILED,
        error: errorData   
    }
}
