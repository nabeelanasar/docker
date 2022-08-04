/*
 * Footer.tsx.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React from 'react';
import * as Bootstrap  from 'react-bootstrap';


export const Footer = ( props: any) => {

    return(
        <Bootstrap.Nav className="justify-content-center" style={{backgroundColor:'#212529', color:'#fff', height:'40px'}} >
            <p className="text-center  mb-4" style={{ margin:'.5em'}}>© All Right Reserved Free Learn Team</p>
        </Bootstrap.Nav>
    )
}
