/*
* Image.
*
* @author Anisha
* @version 1.0.0
*/

import React  from 'react';
import * as Bootstrap from 'react-bootstrap';


export const Image = ( props: any ) => {

    return (
        <Bootstrap.Image src={ props.src } fluid />
    );
}