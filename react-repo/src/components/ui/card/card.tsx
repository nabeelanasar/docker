/*
* Card.tsx.
*
* @author Viji
* @version 1.0.0
*/

import React from 'react';

import productImage from '../../../assets/laptop.jpg';


export const Card = ( props: any ) => {

    return (
        <div className="three wide column">
            <div className="image">
                <img src={productImage} alt=''/>
            </div>
            <div className="header">{ props.name }</div>
                <div className="meta">
                    { props.price }
                </div>
            <div className="description">
                { props.summary }
            </div>
            <div className="ui bottom attached button">  Read More..</div>
        </div>
    );
}
