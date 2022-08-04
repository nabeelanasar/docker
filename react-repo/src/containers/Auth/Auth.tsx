/*
* Auth.tsx.
*
* @author Viji
* @version 1.0.0
*/

import React, { Component } from 'react';
import { produce } from 'immer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FormAuth } from '../../components/ui/index';
import classes from './Auth.module.css';
import { ApplyClass } from '../../hoc/ApplyClass/ApplyClass';
import { checkValidity } from '../../shared/shared';
import * as actionCreators from '../../store/actions/index';


interface Props {
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    onAuthenticate: any;
    authRedirectPath: string;
}

class Auth extends Component<Props> {
    
    state = {   
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Your Email',
                    warning: 'Enter valid email.',
                    help: ''
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Password',
                    warning: 'Password dosent meet criteria',
                    help: 'Password should be minimum 6 characters.'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    inputChangeHandler = ( event: any, controlName: string ) => {
        let updatedForm: any = null;

        updatedForm = produce( this.state.signInForm, (formControl:any) => {
            formControl[controlName].value = event.target.value;
            formControl[controlName].valid = checkValidity( event.target.value, formControl[controlName].validation );
            formControl[controlName].touched = true;
            formControl[controlName].checked = true;
            
        });

        // check if all elmements are valid
        let formIsValid = true;
        for ( let formControl in updatedForm ) {
            formIsValid = updatedForm[formControl].valid && formIsValid;
        }
        this.setState( {signInForm: updatedForm, formIsValid: formIsValid} );
    }

    submitHandler = ( event: any ) => {
        event.preventDefault( );

        // start authenticating indicator
        event.target.className = 'ui fluid large blue elastic loading submit button';

        this.props.onAuthenticate( this.state.signInForm.email.value, this.state.signInForm.password.value );
    }

    render( ) {

        if ( this.props.isAuthenticated ) {
            return <Redirect to={this.props.authRedirectPath} />;
            // return <Redirect to="/" />;
        }

        let formJSX = null;
        formJSX = (
            <ApplyClass className={classes.auth}>
                <FormAuth
                    formConfig={ this.state.signInForm }
                    onSubmit={ this.submitHandler }
                    onChange={ this.inputChangeHandler }
                    formIsValid={this.state.formIsValid}
                    submitText='Sign In'
                    formTitle='Sign in here'
                    errorMessage={ (this.props.error)? this.props.error.message : null }
                />
            </ApplyClass>
        );

        return (
            <div>
                { formJSX }
            </div>
        );
    }
}

const mapStateToProps = ( state: any ) => {
    return {
        authenticating: state.auth.authenticating,
        isAuthenticated: state.auth.token != null,
        error: state.auth.error,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onAuthenticate: ( email: string, password: string ) => dispatch( actionCreators.authenticate({email: email, password: password}) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
