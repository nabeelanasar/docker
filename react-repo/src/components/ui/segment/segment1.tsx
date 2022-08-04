/*
* Segment for Blogs.
*
* @author Vishnu
* @version 1.0.0
*/

import React from 'react';
import { Link } from 'react-router-dom';

import blog1Image from '../../../assets/blog1.png';


export const Segment1 = ( props: any ) => {
    
    let content: any;
    ( props.children ) ? content = props.children :  content = props;
    return (
        <div className = "ui segment">
            <h3 className = "ui header">{ content.title }</h3> 
            <div className = "image"><img  className="ui fluid image" alt='' src = { blog1Image }/></div>
            <div className = "ui basic segment">
                <h5 className = "ui right floated header">
                   <span className="ui small grey text">Posted on </span><span className = "ui blue text">{ content.date }</span>
                </h5>
                <h5 className="ui left floated header">
                    <span className="ui small grey text">Posted by </span><span className = "ui blue text">{ content.author }</span>
                </h5>
            </div>
            <div className="ui basic segment">
                { content.content }
                <div className = "ui right floated tiny text primary tertiary button">
                    <Link to = { content.id } >Read more...</Link>
                </div> 
            </div>
        </div>
    );  
}
 