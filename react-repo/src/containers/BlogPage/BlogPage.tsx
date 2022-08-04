/*
 * BlogPage.tsx
 * 
 * @author Anisha
 * @version 1.0.0
 */

import React, { Component, Fragment } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import {  Message, Breadcrumb, Segment5, Segment1  } from '../../components/ui/index';
import Layout3 from '../../hoc/ApplyLayouts/Layout3';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    blogs: any;
    categories: any;
    selectedCategory: any;
    error: any;
    noData: any;
    onInitBlogsPage: any;
    onSetSelectedCategory: any;
    onUpdateBlogPage: any;
    isAuthenticated: boolean;
}

class BlogPage extends Component<Props> {

    listElemets: React.RefObject<HTMLSelectElement>;

    constructor( props: any ) {
        super( props );
        this.listElemets = React.createRef<HTMLSelectElement>( );
    }

    DEFAULT_CATEGORY_ID = 0;

    setSelectedCategoryHandler = ( selectedCategory: string ) => {
       
        if ( selectedCategory !== this.props.selectedCategory ) {
            
            this.props.onSetSelectedCategory( selectedCategory );
        }
    }

    render( ) {

        // console.log( 'BlogPage rendering...' );

        if ( !this.props.isAuthenticated ) {
            return <Redirect to='/auth' />;
        }

        let blogs: any = this.props.blogs;
        let blogsJSX: any;

        if ( blogs ) {
            
            blogsJSX = blogs.map(
                (item: any, index: number) => { 
                    return (
                        <Segment1
                            id={ `/blogs/${ item.id}` }
                            title={ item.title }
                            content={ item.content }
                            date={ item.date?.substring(0,10) }
                            author={ item.author }
                            key={ item.id }/>
                    )
                }
            );
        }

        let categories: any = this.props.categories;
        let categoriesJSX: any = '';

        if ( categories ) {

            let selectedCategoryId: any = ( this.props.selectedCategory ) ? this.props.selectedCategory : this.DEFAULT_CATEGORY_ID;
           
            categoriesJSX = (
                <Segment5
                    name = 'blogs?blogsCategoryId'
                    items = { categories }
                    title = 'Categories'
                    selected = { selectedCategoryId }
                    clicked = { this.setSelectedCategoryHandler }
                    focusRef = { this.listElemets }/>
            );
        }

        if ( this.props.error ) {
            blogsJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            );
        }

        let breadCrumbJSX = (
            <Breadcrumb 
                items = { null }
                active = 'Blogs'/>
        );

        return (
            <Fragment>
                <Layout3
                    breadCrumbJSX = { breadCrumbJSX }
                    categoriesJSX = { categoriesJSX }
                    contentJSX = { blogsJSX }
                    noData = { this.props.noData }/>
            </Fragment>
        );
    }

    componentDidMount( ) {

        // console.log( 'BlogPage ComponentDidMount' );

        if ( !this.props.isAuthenticated ) {
            return;
        }
        let selectedCategory = ( this.props.selectedCategory ) ? this.props.selectedCategory : this.DEFAULT_CATEGORY_ID;
        this.props.onInitBlogsPage( selectedCategory ); 
    }

    componentDidUpdate( ) {

        // console.log( 'BlogPage componentDidUpdate' );

        if ( !this.props.isAuthenticated ) {
            return;
        }

        this.listElemets.current?.focus( );

        if ( !this.props.blogs && !this.props.error ) {
            this.props.onUpdateBlogPage( this.props.selectedCategory );
        }
    }
}

const mapStoreToProps = ( state: any ) => {

    return {
        blogs: state.blogPage.blogs,
        categories: state.blogPage.categories,
        selectedCategory: state.blogPage.selectedCategory,
        error: state.blogPage.error,
        noData: state.blogPage.noData,
        isAuthenticated: state.auth.token != null
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    
    return {
        onInitBlogsPage: ( selectCategory: any ) => dispatch( actionCreators.initBlogsPage(selectCategory) ),
        onSetSelectedCategory: ( selectCategory: any ) => dispatch( actionCreators.setSelectedCategory(selectCategory) ),
        onUpdateBlogPage: ( selectCategory: any ) => dispatch( actionCreators.updateBlogPage(selectCategory) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( BlogPage );
