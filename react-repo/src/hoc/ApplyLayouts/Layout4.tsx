/*
 * Layout4 for blogDetails.
 * 
 * @author Anisha
 * @version 1.0.0
 */

import React from 'react';


const Layout4 = ( props: any ) => {

    let loaderClass = props.blogsJSX ? "sixteen wide column" : "sixteen wide column ui active centered inline loader";
   
    return (
        <div className = "ui left aligned stackable grid container">
            <div className = "row">
                <div className = "sixteen wide column">
                    {  props.breadCrumbJSX }
                </div>
            </div>
            <div className="row">
                <div className = { loaderClass }>
                    {  props.blogsJSX }
                </div> 
            </div>
        </div>
    );
}

export default Layout4;
