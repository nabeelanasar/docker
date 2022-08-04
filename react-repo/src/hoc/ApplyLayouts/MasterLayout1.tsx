/*
 * MasterLayout1.tsx.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Menu } from '../../components/ui/index';
import classes from './MasterLayout1.module.css';

interface Props {
    children: any;
    isAuthenticated: boolean;
}

class MasterLayout1 extends Component<Props> {
   
    render( ) {
        return (
            <Fragment>
                <Menu isAuthenticated = { this.props.isAuthenticated }/>
                <main className={classes.app}>
                    { this.props.children }
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = ( state: any ) => {
    return {
        isAuthenticated: state.auth.token != null
    };
};

export default connect( mapStateToProps )( MasterLayout1 );
