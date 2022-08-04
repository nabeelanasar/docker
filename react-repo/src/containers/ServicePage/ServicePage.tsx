/*
 * ServicePage.tsx.
 * 
 * @author Viji
 * @version 1.0.0
 */

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import { Message, Breadcrumb, Segment5, Segment3 } from '../../components/ui/index';
import Layout3 from '../../hoc/ApplyLayouts/Layout3';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    services: any;
    categories: any;
    selectedCategory: any;
    error: any;
    noData: any;
    onInitServicesPage: any;
    onSetSelectedCategory: any;
    onUpdateServicePage: any;
}

class ServicePage extends Component<Props> {

    listElemets: React.RefObject<HTMLSelectElement>;

    constructor( props: any ) {
        super( props );
        this.listElemets = React.createRef<HTMLSelectElement>( );
    }

    DEFAULT_CATEGORY_ID = 0;
    DEFAULT_CATEGORY_NAME = 'All';

    setSelectedCategoryHandler = ( selectedCategory: string ) => {

        if ( selectedCategory !== this.props.selectedCategory ) {

            this.props.onSetSelectedCategory( selectedCategory );
        }
    }

    render( ) {

        // console.log( 'ServicePage rendering...');

        let services: any = this.props.services;
        let servicesJSX: any;

        if ( services ) {
        
            servicesJSX = services.map( 
                (item: any, index: number) => {
                    return (
                        <Segment3
                            id = { `/services/${ item.id}` }
                            title = { item.name }
                            content = { item.description }
                            key = { item.id }/>
                    )
                }
            );
        }

        let categories: any = this.props.categories;
        let categoriesJSX: any = '';

        if ( categories ) {

            let selectedCategoryId: string = ( this.props.selectedCategory) ? this.props.selectedCategory : this.DEFAULT_CATEGORY_ID;

            categoriesJSX = (
                <Segment5 
                    pageName = 'table1'
                    name = 'services?servicesCategoryId'
                    items = { categories }
                    title = 'List of Services'
                    selected = { selectedCategoryId }
                    clicked = { this.setSelectedCategoryHandler }
                    focusRef = { this.listElemets }/>
            );
        }

        if ( this.props.error ) {

            servicesJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            );
        }

        let breadCrumbJSX = (
            <Breadcrumb 
                items = { null }
                active = 'Services'/>
        );

        return (
            <Fragment>
                <Layout3
                    breadCrumbJSX = { breadCrumbJSX }
                    categoriesJSX = { categoriesJSX }
                    contentJSX = { servicesJSX }
                    noData = { this.props.noData }/>
            </Fragment>
        );
    }

    componentDidMount( ) {

        // console.log( 'ServicePage ComponentDidMount' );

        this.loadInitialState( );  
    }

    componentDidUpdate( ) {

        // console.log( 'ServicePage componentDidUpdate' );

        this.listElemets.current?.focus( );

        if ( !this.props.services && !this.props.error ) {
            this.props.onUpdateServicePage( this.props.selectedCategory );
        }
    }

    loadInitialState( ) {

        let selectedCategory = ( this.props.selectedCategory ) ? this.props.selectedCategory : this.DEFAULT_CATEGORY_ID;
        this.props.onInitServicesPage( selectedCategory );
    }
}
const mapStoreToProps = ( state: any ) => {

    return {
        services: state.servicePage.services,
        categories: state.servicePage.categories,
        selectedCategory: state.servicePage.selectedCategory,
        noData: state.servicePage.noData,
        error: state.servicePage.error
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    
    return {
        onInitServicesPage: ( selectCategory: any ) => dispatch( actionCreators.initServicesPage(selectCategory) ),
        onSetSelectedCategory: ( selectCategory: any ) => dispatch( actionCreators.setServiceSelectedCategory(selectCategory) ),
        onUpdateServicePage: ( selectCategory: any ) => dispatch( actionCreators.updateServicePage(selectCategory) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( ServicePage );
