/*
* Segment for Services.
*
* @author Vishnu
* @version 1.0.0
*/

import React from 'react';
import { Link } from 'react-router-dom';

import service1image from '../../../assets/service1.png';


export const Segment3 = ( props: any ) => {
    
    let content: any;
    ( props.children ) ? content = props.children : content = props;

    return (
        <div className = "ui segment">
            <h3 className = "ui header">{ content.title }</h3> 
            <div className = "image"><img className = "ui fluid image" alt='' src = { service1image }/></div>
            <div className = "ui basic segment">
                { content.content }
                <div className = "ui right floated tiny text primary tertiary button">
                    <Link to = { content.id } >Read More <i className="hand point right icon"></i></Link>
                </div> 
            </div>
        </div>
    );
}
 