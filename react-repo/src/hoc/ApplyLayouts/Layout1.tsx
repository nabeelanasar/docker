/*
 * Layout1 for products.
 * 
 * @author Vineetha
 * @version 1.0.0
 */

import React from 'react';

import { Message } from '../../components/ui/index';

const Layout1 = ( props: any ) => {
    let loaderClass = props.contentJSX ? "sixteen wide column" : "sixteen wide column ui active centered inline loader";
    let layoutJSX: any;

   if( props.noData ) {
       
        layoutJSX = <Message className = { loaderClass }
            variant = "success"
            content = "Data Not Found"/> 
    } else {
    
        layoutJSX = <div className = "ui container">
            <div className = "ui equal width stackable grid">
                <div className = "row">
                    <div className = "four wide left aligned column">
                        { props.breadCrumbJSX }
                    </div>
                    <div className = "six wide right aligned column">
                        { props.dropDownJSX }
                    </div>
                    <div className = "six wide right aligned column">
                        { props.searchJSX }
                    </div>
                </div>
                { props.collectionsJSX?.map(
                    (item: any, index: number) => {
                        
                        return (
                            <div className = "row" key = { index }>
                                <div className = { loaderClass }>
                                    { item }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    }
    return ( layoutJSX );
}

export default Layout1;
