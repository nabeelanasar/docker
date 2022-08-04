/*
* Button.tsx.
*
* @author Viji
* @version 1.0.0
*/

import React from 'react';
import * as Bootstrap from 'react-bootstrap';


export const Button = ( props: any ) => {

    return (
        <Bootstrap.Button type={ props.type } className={ props.className } onClick={ props.onClick }  variant={ props.variant } disabled={ props.disabled }>{ props.children }</Bootstrap.Button>
    );
}
