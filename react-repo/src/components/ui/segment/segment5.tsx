/*
 * Segment5 for blogs and services.
 * 
 * @author Viji
 * @version 1.0.0
 */

import React  from 'react';
import { Link } from 'react-router-dom';


export const Segment5 = ( props: any ) => {

    let items: any;
    let focusRef: any;
    
    items = props.items.map( (item: any, index: number) => {
        let selectedClass:any = ( props.selected === item.id ) ? "ui left aligned teal inverted basic segment" : "ui left aligned grey basic segment"
        focusRef = ( props.selected === item.id )? props.focusRef : null 
        return (
            <Link to={ `/${ props.name }=${ item.id }` } key={ index } onClick={ ( ) => props.clicked( item.id ) } ref={ focusRef } >
                <div className = { selectedClass } key={ index } >   
                    { item.name }
                </div>
            </Link>
        )
    } );
    
    return (

        <div className = "ui raised segments">
            <div className = "content">
                <div className = "ui secondary segment"><b>{ props.title }</b></div>
            </div>
            <div className = "ui fitted segment" >
                { items }
            </div>
        </div>
    );
}