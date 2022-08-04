/*
* serviceDetail.tsx
*
* @author Viji
* @version 1.0.0
*/

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';  

import * as actionCreators from '../../../store/actions/index';
import { Message, Breadcrumb, Segment4 } from '../../ui/index';
import Layout6 from '../../../hoc/ApplyLayouts/Layout6';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    name: string;
    details: string;
    key: string;
    onClick: any;
    onChange: any;
    service: any;
    error: any;
    onInitServiceDetailPage: any;
    onSetSelectedCategory: any;
}

class ServiceDetail extends Component<Props> {

    render( ) {

        // console.log( 'ServiceDetail rendering...' );

        let servicesJSX: any;

        const service: any = this.props.service;

        if ( service ) {
            //  console.log( service, service.name, service.details[0].details )
            servicesJSX = (
                <Segment4
                    id = { '/services' }
                    path = { this.props.history }
                    title = { service.name }
                    content = { service.details[0] ? service.details[0].details: null }/>
            )
        }

        if ( this.props.error ) {

            servicesJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            )
        }

        let itemsArr = [ 'Services' ];

        let breadCrumbJSX = (
            <Breadcrumb 
                items = { itemsArr }
                active = 'Service Details'
                link = '/services'
                onClick = { ( ) => this.props.history.replace('/services') }/>
        );
                                
        return (
            <Fragment>
                <Layout6
                    breadCrumbJSX={ breadCrumbJSX }
                    servicesJSX={ servicesJSX }/>
            </Fragment>
        );
    }

    componentDidMount( ) {

        // console.log( 'ServiceDetail ComponentDidMount' );

        this.props.onInitServiceDetailPage( this.props.match.params.id );
    }
  
}

const mapStoreToProps = ( state: any ) => {

    return {
        service: state.serviceDetailPage.service,
        selectedService: state.serviceDetailPage.selectedService,
        error: state.serviceDetailPage.error
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    
    return {
        onInitServiceDetailPage: ( selectedService: any ) => dispatch( actionCreators.initServiceDetailPage(selectedService) ),
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( ServiceDetail );
