/*
* Form.
*
* @author Anisha
* @version 1.0.0
*/

import React from 'react';
import { Link } from 'react-router-dom';

import { Input1 } from '../../ui/index';


export const FormAuth  = ( props: any ) => {

    let formElementArray: any[ ] = [ ];

    for ( let [key, value] of Object.entries(props.formConfig) ) {

        formElementArray.push( {name: key, config: value} );
    }

    let formControlsJSX = formElementArray.map( (item: any) => {

        return(
            <Input1
                config = { item.config }
                name = { item.name }
                key = { item.name }
                onChange = { props.onChange }
            />
        );
    });

    // let formState: string = 'ui form';
    let submitButtonState: string = 'ui fluid large blue submit button';
    if ( !props.formIsValid ) {
        submitButtonState = `disabled ${submitButtonState}`;
    }

    return (
        <div className = "ui blue attached raised segment">
            <h2 className = "ui top center aligned header">{ props.formTitle }</h2>
            <div className = "ui basic left aligned segment">
                <form className = "ui form">
                   { formControlsJSX }
                   <button className = { submitButtonState } onClick = { props.onSubmit }>{ props.submitText }</button>
                </form>
            </div>
            <div className = "ui negative message transition hidden">
                <i className = "close icon"></i>
                <div className = "header">
                    There was an error during login
                </div>
                <p>{ props.errorMessage }</p>
            </div>
            <div className = "ui divider"></div>
            <div className = "ui basic center aligned segment">
                <h4 className = "ui top center aligned header">Not Yet Registered?</h4>
                <Link to = { '/signup' } className = "ui medium red text"><span className = "ui large blue text">Sign Up</span></Link>
            </div>
            <div className = "ui horizontal divider">OR SIGN IN WITH</div>
            <div className = "ui basic center aligned segment">
                <button className = "ui facebook button">
                    <i className = "facebook icon"></i>
                    Facebook
                </button>
                <button className = "ui google plus button">
                    <i className = "google plus icon"></i>
                    Google Plus
                </button>
            </div>
        </div>
    );
}
