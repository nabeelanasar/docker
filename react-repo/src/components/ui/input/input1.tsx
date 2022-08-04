/*
* Input1 for all forms.
*
* @author Anisha
* @version 1.0.0
*/

import React from 'react';

import { Dropdown } from '../index';


export const Input1 = ( props: any ) => {

    let inputElement = null;
  
    switch ( props.config.elementType ){
        case ( 'input' ):
            if ( props.config.elementConfig.type === 'checkbox' ) {
                
                inputElement = (
                    <div className = "ui checkbox">
                        {
                            props.config.elementConfig.options.map( (option: any) => {
                                return(
                                    <div key = { option.value }>
                                        <input type = { 
                                            props.config.elementConfig.type } 
                                            name = { props.name } 
                                            onChange = { (event: any) => props.onChange(event, props.name) }
                                            checked = { props.config.checked }/>
                                        <label>{ option.displayValue }</label>
                                    </div>
                                )
                            } )
                        }
                    </div>
                );

            }  else if ( props.config.elementConfig.type === 'radio' ) {

                inputElement = (
                    <div className = "inline fields">
                        {
                            props.config.elementConfig.options.map( (option: any) => {
                                return(
                                    <div className = "field" key={ option.value }>
                                        <div className = "ui radio checkbox">
                                            <input 
                                                type = { props.config.elementConfig.type } 
                                                name = { props.name } 
                                                onChange = { (event: any) => props.onChange(event, props.name) } 
                                                value = { option.value }
                                                checked = { option.value === props.config.selectedOption }/>
                                            <label>{ option.displayValue }</label>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>            
                );
                
            } else {
                
                inputElement = (
                    <input 
                        type = { props.config.elementConfig.type }
                        name = { props.name } 
                        placeholder = { props.config.elementConfig.placeholder }
                        value = { props.config.value }
                        onChange = { (event) => props.onChange(event, props.name) }/>
                );
            }
            break;

        case ( 'select' ):
            // console.log( props.config.select )
            inputElement = (
                <Dropdown
                    onChange = { (event: any) => props.onChange(event, props.name) }
                    options = { props.config.elementConfig.options }
                    focusRef = { props.focusRef }
                    selected = { props.config.select }
                    />
            );
            break;

        case ( 'textarea' ):
            inputElement = (
                <div className = "field">
                    <textarea rows = { 2 } name = { props.name } placeholder = { props.config.elementConfig.placeholder } value = { props.config.value } onChange = { (event) => props.onChange(event, props.name) }></textarea>
                </div>
            );
        
            break;

        default:
            inputElement = (
                <input onChange={ (event: any) => props.onChange(event, props.name) }/>
            );
    }

    let inputHelpMsgJSX: any;
    if ( props.config.elementConfig.help.trim().length > 0 ) {
        inputHelpMsgJSX = (
            <div className = "ui pointing label">
                { props.config.elementConfig.help }
            </div>
        );
    }

    let inputWarningMsgJSX: any;
    if ( (!props.config.valid && props.config.touched) && props.config.elementConfig.warning.trim( ).length > 0 ) {
        inputWarningMsgJSX = (
            <div className="ui pointing red basic label">
                { props.config.elementConfig.warning }
            </div>
        );
    }

    let inputState: string = 'field';
    if ( props.config.touched ) {
        inputState = ( !props.config.valid && props.config.touched )?'field error' : 'field success';
    }

    if ( props.config.validation.required ) {
        inputState = `required ${ inputState }`;
    }

    return (
        <div
            className = { inputState }>
            <label className = 'ui left aligned'>{ props.config.elementConfig.label }</label>
            { inputElement }
            { inputWarningMsgJSX }
            { inputHelpMsgJSX }
        </div>
    );
}
