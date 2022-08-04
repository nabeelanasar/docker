/*
* Image.
*
* @author Anisha
* @version 1.0.0
*/

import React  from 'react';


export const Image = ( props: any ) => {

    return (
        <img className = "ui fluid image" src = { props.src } alt = ''></img>
    );
}