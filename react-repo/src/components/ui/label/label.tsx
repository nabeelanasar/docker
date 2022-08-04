/*
* Badge.tsx.
*
* @author Anusree
* @version 1.0.0
*/

import React  from 'react';


export const Label = ( props: any ) => {

    return (        
        <div className = { props.className }>{ props.children }</div>      
    );
}
