/*
* Form.
*
* @author Anisha
* @version 1.0.0
*/

import React  from 'react';
import * as Bootstrap from 'react-bootstrap';

import { Button, Input } from '../index';


export const Form  = ( props: any ) => {

    let formElementArray: any[ ] = [ ];

    for ( let [key, value] of Object.entries(props.formConfig) ) {

        formElementArray.push( {name: key, config: value} );
    }

    let formControlsJSX = formElementArray.map( (item: any) => {
        return(
            <Input
                config = { item.config }
                name = { item.name }
                key = { item.name }
                onChange = { props.onChange }
            />
        );
    });

    return (       
        <Bootstrap.Form onSubmit={ props.onSubmit }>
            { formControlsJSX }
            {(!props.submitButton)? null
            : <Button variant='info' type='submit' disabled={ !props.formIsValid }>Submit</Button>}
        </Bootstrap.Form>
    );
}
