/*
*ErrorPage
*
* @author Vineetha
* @version 1.0.1
*/

import React, { Component } from 'react';


interface Props {
    errorType: string
}

class ErrorPage extends Component<Props> {

    render( ) {

        let errorMessage: any;
        switch (this.props.errorType){
            case '404':
                errorMessage = "PageNotFound"; 
            break;
            case '403':
                errorMessage = "Forbidden"; 
            break;
            case '400':
                errorMessage = "BadRequest"; 
            break;
            case '401':
                errorMessage = "UnAutherized"; 
            break;
            default: errorMessage = null ;
                
        }
        return ( <p>{ errorMessage }</p>  );
    }
    
}


export default ErrorPage;
