/*
 * Layout5 for project.
 * 
 * @author Anusree
 * @version 1.0.0
 */

import React from 'react';

import { Message } from '../../components/ui/index';


const Layout5 = ( props: any ) => {

    let loaderClass =  props.projectDescriptionJSX ? "twelve wide column" : "twelve wide column ui active centered inline loader";
    let layoutJSX: any;

   if( props.noData ) {
       
        layoutJSX = <Message className = { loaderClass }
            variant = "success"
            content = "Data Not Found"/> 
    } else {
    
        layoutJSX = <div className = "ui left aligned stackable grid container">
            <div className = "row">
                <div className = "eight wide column">
                    { props.breadCrumbJSX }
                </div>
                <div className = "eight wide column">
                    { props.projectListJSX }
                </div>
            </div>
            <div className = "row">
                <div className = "four wide column">
                    { props.projectDetailsJSX }
                </div>
                <div className = { loaderClass }>
                        { props.projectDescriptionJSX } 
                    <div className = "ui basic segment">
                        { props.costChartJSX }
                    </div>
                    <div className = "ui basic segment">
                        { props.scheduleChartJSX }
                    </div>
                </div>
            </div>   
        </div>
    }
    return ( layoutJSX );
}

export default Layout5;
