/*
 * CustomAlert.tsx
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React  from 'react';
import * as Bootstrap  from 'react-bootstrap';

import classes from './alert.module.css';
import { ApplyClass } from '../../../hoc/ApplyClass/ApplyClass';


export const Alert = ( props: any ) => {
   
    return (
        <ApplyClass className={ classes.alertText }> 
            <Bootstrap.Alert variant={ props.variant }>
                <Bootstrap.Alert.Heading className={ classes.titleStyle }>{ props.title }</Bootstrap.Alert.Heading>
                { props.content }
            </Bootstrap.Alert>
        </ApplyClass>
    );
}
