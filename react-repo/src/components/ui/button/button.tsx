/*
* Button.tsx.
*
* @author Viji
* @version 1.0.0
*/

import React from 'react';


export const Button = ( props: any ) => {

    return (
        <button className = "ui primary button" disabled = { props.disabled } type = { props.type } onClick = { props.onClick } >
             { props.children }
        </button>
    );
}
