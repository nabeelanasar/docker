/*
* Module product.tsx
*
* @author Vineetha
* @version 1.0.1
*/

import React, { Component, Fragment} from 'react';

import classes from './product.module.css';
import WrapClassToComponent from '../../hoc/ApplyClass/ApplyClass';
import { Card2 } from '../ui'


interface Props {
    image: any;
    name: string;
    price: string;
    details: string;
    summary: string;
    key: string;
    onClick: any;    
}

class Product extends Component<Props> {

    state = { showModel: false };

    showProductDetails = ( event: any ) => {

        this.setState( {showModel: true} );
    }

    hideProductDetails = ( ) => {

        this.setState( {showModel: false} );  
    }

    render( ) {

        // console.log( 'Product rendering...' );
       
        let cardJSX = null;
        
        cardJSX = (
            <Card2
             name = { this.props.name  }
             price = { this.props.price }
             summary = { this.props.summary }
             onClick = { this.showProductDetails }/>
        );

        return (
            <Fragment>
                { cardJSX }
            </Fragment>
        );
    } 
}

export default WrapClassToComponent( Product, classes.product );
