/*
* Segment for ServiceDetails.
*
* @author Viji
* @version 1.0.0
*/

import React from 'react';

import service1image from '../../../assets/service1.png';


export const Segment4 = ( props: any ) => {
    
    let content: any;
    ( props.children ) ? content = props.children :  content = props;
     
    return (
        <div className = "ui segment">
            <div className = "image">
                <h3 className = "ui header">{ content.title }</h3>
                <img className = "ui fluid image" alt = '' src={ service1image }/>
            </div>
            <div className = "ui basic segment">
                
                { content.content }
                <button className = "ui right floated primary tertiary button" onClick={ ( ) => props.path.goBack( ) }><i className="hand point left icon"></i>Back</button>
            </div>
        </div>
    );
}
 