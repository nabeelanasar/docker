/*
* SignUp.tsx.
*
* @author Vishnu
* @version 1.0.0
*/

import React, { Component } from 'react';
import { produce } from 'immer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { FormSignup } from '../../components/ui/index';
import classes from './Auth.module.css';
import { ApplyClass } from '../../hoc/ApplyClass/ApplyClass';
import { checkValidity } from '../../shared/shared';
import * as actionCreators from '../../store/actions/index';


interface Props {
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    onSignup: any;
}

class SignUp extends Component<Props> {
    
    // inputElementRef: React.RefObject<HTMLButtonElement>;

    // constructor( props: any ) {
    //     super( props );
    //     this.inputElementRef = React.createRef<HTMLButtonElement>( );
    // }

    state = {
        signUpForm: {
            firstname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'First Name',
                    placeholder: 'First Name',
                    warning: '',
                    help: ''
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
            lastname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Last Name',
                    placeholder: 'Last Name',
                    warning: '',
                    help: ''
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    label: 'Phone',
                    placeholder: '',
                    warning: '',
                    help: ''
                },
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
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
                    warning: 'Password doesnt meet criteria.',
                    help: 'Password should be minimum 6 characters.'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    inputChangeHandler = ( event: any, controlName: string ) => {

        let updatedForm: any = null;

        updatedForm = produce( this.state.signUpForm, (formControl:any) => {
            formControl[ controlName ].value = event.target.value;
            formControl[ controlName ].valid = checkValidity( event.target.value, formControl[controlName].validation );
            formControl[ controlName ].touched = true;
            formControl[ controlName ].checked = true;
            
        });

        // check if all elmements are valid
        let formIsValid = true;
        for ( let formControl in updatedForm ) {
            formIsValid = updatedForm[ formControl ].valid && formIsValid;
        }
        this.setState( {signUpForm: updatedForm, formIsValid: formIsValid} );
    }

    submitHandler = ( event: any ) => {

        event.preventDefault( );

        // start authenticating indicator
        event.target.className = 'ui fluid large blue elastic loading submit button';
        // this.inputElementRef.current?.setAttribute('className', 'ui fluid large blue elastic loading submit button');

        this.props.onSignup( 
            this.state.signUpForm.email.value,
            this.state.signUpForm.password.value,
            this.state.signUpForm.firstname.value,
            this.state.signUpForm.lastname.value,
            this.state.signUpForm.phone.value
        );
    }

    render( ) {

        if ( this.props.isAuthenticated ) {
            return <Redirect to="/" />;
            // this.inputElementRef.current?.setAttribute('className', 'ui fluid large blue submit button');
        }

        let formJSX = null;
        formJSX = (
            <ApplyClass className={classes.auth}>
                <FormSignup
                    formConfig = { this.state.signUpForm }
                    onSubmit = { this.submitHandler }
                    onChange = { this.inputChangeHandler }
                    formIsValid = {this.state.formIsValid}
                    submitText = 'Sign Up'
                    formTitle = 'Sign Up here'
                    errorMessage = { (this.props.error)? this.props.error.message : null }
                    // refference={ this.inputElementRef }
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
        error: state.auth.error
    };
};

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onSignup: ( email: string, password: string, firstName: string, lastName: string, phone: string ) => dispatch( actionCreators.signUp({email: email, password: password, firstName: firstName, lastName: lastName, phone: phone}) )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
