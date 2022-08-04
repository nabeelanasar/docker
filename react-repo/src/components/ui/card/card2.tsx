/*
* ProductCard.tsx.
*
* @author Vineetha
* @version 1.0.0
*/

import React from 'react';

import productImage from '../../../assets/laptop.jpg';
import './card.module.css';


export const Card2 = ( props: any ) => {

    return (
        <div className = "ui card" tabIndex = { 0 }>
            <div className="center aligned content" >
                <div className = "image">
                    <img src = { productImage } alt=''/>
                </div>
                <div className = "header">{ props.name }</div>
                <div className = "meta">
                    <span className = "date">{ props.price }</span>
                </div>
                <div className = "description">
                    { props.summary }
                </div>
            </div>
        </div>
    );
}
