/*
 * Layout1 for products.
 * 
 * @author Vineetha
 * @version 1.0.0
 */

import React from 'react';

import { Message } from '../../components/ui/index';

const Layout2 = ( props: any ) => {
    // let loaderClass = props.contentJSX ? "ui basic segment" : "ui basic segment ui active centered inline loader";
    let layoutJSX: any;

    // console.log( props.noData )
    
   if( props.noData ) {
       
        layoutJSX = <Message className = "ui basic segment" 
        variant = "success"
        content = "Data Not Found"/> 
    } else {
    
        layoutJSX = 
        <div className = "ui container">
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
                            <div key={ index } className="ui basic segment"  > { item } </div>  
                        )
                    })
                }
            </div>
        </div>
    }
    return ( layoutJSX );
}
export default Layout2;
