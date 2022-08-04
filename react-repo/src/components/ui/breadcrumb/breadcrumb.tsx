/*
* Breadcrumb.
*
* @author Anisha
* @version 1.0.0
*/

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Breadcrumb = ( props: any ) => {

    let items = props.items?.map( (item: any, index: number) => {

        return(
            <Fragment key = { index }>
                <i key = { index+1 } className = "right chevron icon divider"></i> 
                <Link key = { index+2 }  to = { props.link } className = "section">
                    { item }
                </Link> 
            </Fragment>
        )
    } );
   
    return (
        <div className = "ui small breadcrumb">
            <Link to = '/' className="section">Home</Link>
            { items }
            <i className = "right chevron icon divider"></i>
            <div className = "active section">{ props.active }</div>
        </div>
        
    );
}
