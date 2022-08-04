/*
* Input.tsx.
*
* @author Anisha 
* @version 1.0.0
*/

import React from 'react';
import * as Bootstrap  from 'react-bootstrap';


export const Input = ( props: any ) => {

    let inputElement = null;
   
    switch ( props.config.elementType ){
        case ( 'input' ):
            if ( props.config.elementConfig.type === 'checkbox' ) {
                
                inputElement = props.config.elementConfig.options.map((option: any) => (
                    <Bootstrap.Form.Check
                        type={ props.config.elementConfig.type }
                        label={ option.displayValue }
                        value={ option.value }
                        name={ props.name }
                        key={ option.value }
                        checked = { props.config.checked }
                        onChange={ (event: any) => props.onChange(event, props.name) }
                    />
                ));

            } else if ( props.config.elementConfig.type === 'radio' ) {
                
                inputElement = props.config.elementConfig.options.map((option: any) => (
                    <Bootstrap.Form.Check
                        type={ props.config.elementConfig.type }
                        label={ option.displayValue }
                        value={ option.value }
                        name={ props.name }
                        key={ option.value }
                        checked = { props.config.checked }
                        onChange={ (event: any) => props.onChange(event, props.name) }
                    />
                ));
                
            } else {
                inputElement = (
                    <Bootstrap.Form.Control
                        as={ props.config.elementType }
                        type={ props.config.elementConfig.type }
                        name={ props.name }
                        placeholder={ props.config.elementConfig.placeholder }
                        value={ props.config.value }
                        isInvalid={ !props.config.valid && props.config.touched }
                        onChange={ (event) => props.onChange(event, props.name) }
                    /> 
                );
            }
            break;

        case ( 'select' ):
            inputElement = ( 
                <Bootstrap.Form.Control
                    as={ props.config.elementConfig.type }
                    name={ props.name }
                    key={ props.value }
                    onChange={ (event: any) => props.onChange(event, props.name) }
                >
                {
                    props.config.elementConfig.options.map((option: any, index: any) => {
                        return (<option key={index} value={option.value}>{option.displayValue}</option>)
                    })
                }
                </Bootstrap.Form.Control>
            );
            break;

        case ( 'textarea' ):
            inputElement = <Bootstrap.Form.Control 
                as={ props.config.elementType }
                name={ props.name }
                placeholder={ props.config.elementConfig.placeholder }
                value={ props.config.value }
                isInvalid={ !props.config.valid && props.config.touched }
                onChange={ (event) => props.onChange(event, props.name) }/> 
            break;

        default:
            inputElement = (
                <input />
            );
    }

    return (
        <Bootstrap.Form.Group controlId={ props.name }>
            <Bootstrap.Form.Label>{ props.config.elementConfig.label }</Bootstrap.Form.Label>
            { inputElement }
            <Bootstrap.Form.Control.Feedback type="invalid">{ props.config.elementConfig.warning }</Bootstrap.Form.Control.Feedback>
            <Bootstrap.Form.Text muted>{ props.config.elementConfig.help }</Bootstrap.Form.Text>
        </Bootstrap.Form.Group>
    );
}
