/*
* Badge.tsx.
*
* @author Anusree
* @version 1.0.0
*/

import React  from 'react';
import * as Bootstrap from 'react-bootstrap';


export const Badge = ( props: any ) => {

    return (       
        <Bootstrap.Badge pill variant={ props.variant } className={ props.className }>{ props.children }</Bootstrap.Badge>         
    );
}
