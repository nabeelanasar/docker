/*
 * Layout6 for ServicesDetail.
 * 
 * @author Viji
 * @version 1.0.0
 */

import React from 'react';


const Layout6 = ( props: any ) => {

    let loaderClass = props.servicesJSX ? "sixteen wide column" : "sixteen wide column ui active centered inline loader";
   
    return (
        <div className = "ui left aligned stackable grid container">
            <div className = "row">
                <div className = "sixteen wide column">
                    { props.breadCrumbJSX }
                </div>
            </div>
            <div className = "row"> 
                <div className = { loaderClass }>
                    { props.servicesJSX }
                </div> 
            </div>
        </div>
    );
}

export default Layout6;
