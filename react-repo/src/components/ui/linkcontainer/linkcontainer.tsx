/*
* LinkContainer.tsx.
*
* @author Anusree
* @version 1.0.0
*/

import React  from 'react';
import * as BootstrapRouter from 'react-router-bootstrap';


export const LinkContainer = ( props: any ) => {

    return (
        <BootstrapRouter.LinkContainer to={ props.to } activeClassName={ props.activeClassName } className={ props.className }>
            { props.children }
        </BootstrapRouter.LinkContainer>
    );
}
