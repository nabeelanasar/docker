/*
 * Layout7 for covid.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React from 'react';

import { Message } from '../../components/ui/index';

const Layout7 = ( props: any ) => {
    
    let loaderClass = props.chartJSX ? "twelve wide column" : "twelve wide column ui active centered inline loader";
    let layoutJSX: any;

   if( props.noData ) {
       
        layoutJSX = <Message className = { loaderClass }
            variant = "success"
            content = "Data Not Found"/> 
   } else {
       
        layoutJSX = <div className = "ui stackable grid container">
            <div className = "row  left aligned">
                <div className = "eight wide column">
                    { props.breadCrumbJSX }
                </div>
                <div className = "eight wide column">
                    { props.dropDownJSX }
                </div>
            </div>
            <div className = "row">
                <div className = "four wide column">
                    { props.tableJSX }
                </div>
                <div className = { loaderClass }>
                    { props.chartJSX }
                </div>  
            </div>
            <div className = "ui basic segment">
                { props.transitionJSX }
            </div> 
        </div>
    }
    return ( layoutJSX );
}

export default Layout7;
