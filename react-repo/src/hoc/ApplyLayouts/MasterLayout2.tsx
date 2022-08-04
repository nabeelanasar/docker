/*
 * MasterLayout2.tsx.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React, { Fragment } from 'react';

import { Footer } from '../../components/ui/index';
import { Menu } from 'semantic-ui-react';


const MasterLayout2 = ( props: any ) => {
   
    return (
        <Fragment>
            <Menu/>
            <main>
                { props.children }
            </main>
            <Footer/>
        </Fragment>
    );
}

export default MasterLayout2;
