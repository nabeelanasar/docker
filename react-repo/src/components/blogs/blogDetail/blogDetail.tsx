/*
* blogDetails.tsx
*
* @author Anisha
* @version 1.0.0
*/

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';  
import { produce } from 'immer';

import { checkValidity } from '../../../shared/shared';
import userImage from '../../../assets/person-icon.jpg';
import * as actionCreators from '../../../store/actions/index';
import { Segment2, Breadcrumb, Form, Comment, Message } from '../../ui/index';
import Layout4 from '../../../hoc/ApplyLayouts/Layout4';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    comments: any;
    key: string;
    onClick: any;
    onChange: any;
    blog: any;
    error: any;
    onInitBlogDetailPage: any;
    onSetSelectedCategory: any;
    onAddComment: any;
}

class BlogDetail extends Component<Props> {
    
    initialFormState: any = null;
   
    state = {  
        commentForm: {
            
            comment: {
                elementType: 'textarea',
                elementConfig: {
                    type: null,
                    label: 'Leave a comment',
                    placeholder: '',
                    warning: 'Enter minimum 5 characters.',
                    help: 'Must be 5 characters long.'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5
                },
                valid: false,
                touched: false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    label: 'Enter your email id',
                    placeholder: 'Your email',
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
            gender: {
                elementType: 'input',
                selectedOption: '',
                elementConfig: {
                    type: 'radio',
                    options: [
                        {value: 'male', displayValue: 'male'},
                        {value: 'female', displayValue: 'female'}
                    ],
                    label: 'Select Gender',
                    warning: 'Select Gender',
                    help: ''
                },
                
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
            getMessage: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    options: [
                        {value: 'Get Blog Message', displayValue: 'Get Blog Message'}
                    ],
                    label: '',
                    warning: '',
                    help: ''
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                checked: false
            },
            preference: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: [
                        {value: '', displayValue: 'Choose...'},
                        {value: 'One', displayValue: 'One'},
                        {value: 'Two', displayValue: 'Two'},
                        {value: 'Three', displayValue: 'Three'}
                    ],
                    label: 'Preference',
                    warning: '',
                    help: ''
                },
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                select: ''
            }
        },
        formIsValid: false
    }

    inputChangeHandler = ( event: any, controlName: string ) => {
       
        let updatedForm: any = null;

        updatedForm = produce( this.state.commentForm, (formControl: any) => {
            formControl[ controlName ].value = event.target.value;
            formControl[ controlName ].valid = checkValidity( event.target.value, formControl[controlName].validation );
            formControl[ controlName ].touched = true;
            
            if ( formControl[ controlName ].elementConfig.type === 'radio' ) {
                formControl[ controlName ].selectedOption = event.target.value;
            } else if ( formControl[ controlName ].elementConfig.type === 'checkbox' ) {
                formControl[ controlName ].checked = formControl[ controlName ].checked ? false : true;
            } else if ( formControl[ controlName ].elementConfig.type === 'select' ) {
                formControl[ controlName ].select = event.target.value;
            }
        } );

        // check if all elmements are valid
        let formIsValid = true;

        for ( let formControl in updatedForm ) {

            formIsValid = updatedForm[ formControl ].valid && formIsValid;
        }
        
        this.setState( {commentForm: updatedForm, formIsValid: formIsValid} );
    }

    commentSubmitHandler = ( event: any ) => {

        event.preventDefault( );
        this.props.onAddComment( this.props.comments, this.props.match.params.id, this.state.commentForm.username.value, this.state.commentForm.comment.value );
        this.setState( {commentForm: this.initialFormState, formIsValid: false} );
    }

    render( ) {

        // console.log( 'BlogDetail rendering...' );

        let blogsJSX: any;
                        
        // create form dynamically
        let formJSX = null;
        let commentsJSX = null;

        let blog: any = this.props.blog;

        if ( blog ) {

            formJSX = (
                <Form
                    formConfig={ this.state.commentForm }
                    onSubmit={ this.commentSubmitHandler }
                    formIsValid={ this.state.formIsValid }
                    onChange={ this.inputChangeHandler }
                    submitButton = { true }
                    submitText = 'Submit'/>
            );

            let comments: any = this.props.comments;

            if( comments ) {

                commentsJSX = (                    
                    <Comment                        
                    image = { userImage }                        
                    items = { comments }                       
                    key={ comments.id }/>
                );
            }
            
            blogsJSX = (
                <Segment2
                    id={ '/blogs' }
                    path = { this.props.history }
                    title={ blog.title }
                    content={ blog.content }
                    date={ blog.date?.substring(0,10) }
                    author={ blog.author }
                    form = { formJSX } 
                    comments = { commentsJSX }/>
            )
        }

        if ( this.props.error ) {

            blogsJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            )
        }

        let itemsArr = [ 'Blogs' ];
        let breadCrumbJSX = (
            <Breadcrumb 
                items = { itemsArr }
                active = 'Blog Details'
                link = '/blogs'
                onClick = { ( ) => this.props.history.replace('/blogs') }/>
        );
                                
        return (
            <Fragment>
                <Layout4
                    breadCrumbJSX = { breadCrumbJSX }
                    blogsJSX = { blogsJSX }/>
            </Fragment>
        );
    }

    componentDidMount( ) {

        // console.log( 'BlogDetail ComponentDidMount' );

        this.initialFormState = produce( this.state.commentForm, (formControl: any) => { });

        this.props.onInitBlogDetailPage( this.props.match.params.id );
    }

}

const mapStoreToProps = ( state: any ) => {

    return {
        blog: state.blogDetailPage.blog,
        comments: state.blogDetailPage.comments,
        selectedBlog: state.blogDetailPage.selectedBlog,
        error: state.blogDetailPage.error
    }
}

const matchDispatchProps = ( dispatch: any ) => {

    return {
        onInitBlogDetailPage: ( selectedBlog: any ) => dispatch( actionCreators.initBlogDetailPage(selectedBlog) ),
        onAddComment: ( comments: any, blogId: any, userName: any, comment: any ) => dispatch( actionCreators.addComments(comments, blogId, userName, comment) ),
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( BlogDetail );
