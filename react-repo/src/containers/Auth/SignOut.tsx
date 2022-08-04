import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionCreators from '../../store/actions/index';


interface Props {
    onLogout: any;
}

class SignOut extends Component<Props> {

    render( ) {
        return <Redirect to="/" />;
    }

    componentDidMount( ) {
        this.props.onLogout( );
    }
}

const mapDispatchToProps = ( dispatch: any ) => {
    return {
        onLogout: ( ) => dispatch( actionCreators.logout() )
    };
};

export default connect(null, mapDispatchToProps)(SignOut);;
