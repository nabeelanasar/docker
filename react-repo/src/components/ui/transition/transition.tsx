/*
 * Message.tsx
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React  from 'react';
import * as SEMATNTICUI from 'semantic-ui-react';


export const Transition = ( props: any ) => {
   
    return (
        <SEMATNTICUI.Transition visible = { props.visible } animation={ props.animation } duration={ props.duration }>
            { props.children }
        </SEMATNTICUI.Transition>
    );
}
