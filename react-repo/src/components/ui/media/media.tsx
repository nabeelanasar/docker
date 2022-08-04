/*
* Media.tsx.
*
* @author Anusree Mohan
* @version 1.0.0
*/

import React  from 'react';
import * as Bootstrap from 'react-bootstrap';


export const Media = ( props: any ) => {
    
    return (
        <Bootstrap.Media className={ props.className } key={ props.index }>
                {props.children}
        </Bootstrap.Media>
    );
}

export const MediaBody = ( props: any ) => {
    
    return (
        <Bootstrap.Media.Body>
                {props.children}
        </Bootstrap.Media.Body>
    );
}