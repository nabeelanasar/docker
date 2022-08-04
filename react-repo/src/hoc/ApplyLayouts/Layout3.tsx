/*
 * Layout3 for blogs and services.
 * 
 * @author Anisha
 * @version 1.0.0
 */

import React from 'react';

import { Message } from '../../components/ui/index';


const Layout3 = ( props: any ) => {

    let loaderClass = props.contentJSX ? "twelve wide column" : "twelve wide column ui active centered inline loader";
    let layoutJSX: any;
    
   if( props.noData ) {
       
        layoutJSX = <Message className = { loaderClass }
            variant = "success"
            content = "Data Not Found"/> 
    } else {
    
        layoutJSX = <div className = "ui left aligned stackable grid container">
            <div className = "row">
                <div className = "sixteen wide column">
                    { props.breadCrumbJSX }
                </div>
            </div>
            <div className = "row">
                <div className = "four wide column">
                    { props.categoriesJSX }
                </div>  
                <div className = { loaderClass }>
                    { props.contentJSX }
                </div> 
            </div>
        </div>
    }
    return ( layoutJSX );
}

export default Layout3;
