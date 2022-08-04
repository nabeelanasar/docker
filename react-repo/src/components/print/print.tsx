/*
*Print.
*
* @author Vineetha
* @version 1.0.1
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';


interface Props {
    cntr: number,
    onIncrimentCounter: any,
    onDecrementCounter: any
}

class Print extends Component<Props> {
   
    render( ) {
        return (
            <div>
                <h1>PRINT</h1>
                <h3>{ this.props.cntr }</h3>
                <button onClick={ this.props.onIncrimentCounter }>Increment</button>
                <button onClick={ this.props.onDecrementCounter }>Decrement</button>
            </div>
        );
    }
    
}

const mapStoreToProps = ( state: any ) => {
    return {
        cntr: state.print.counter
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    return {
        onIncrimentCounter: ( ) => dispatch( actionCreators.increment(10) ),
        onDecrementCounter: ( ) => dispatch( actionCreators.decrement(10) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps ) (Print);
