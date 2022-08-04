/*
* Dropdown.
*
* @author Anisha
* @version 1.0.0
*/

import React from 'react';
import * as Bootstrap  from 'react-bootstrap';

import classes from './dropdown.module.css';
import { LinkContainer } from '../index';


export const Dropdown = ( props: any ) => {

    let items = props.items.map( (item: any, index: number) => {

        return (
            <LinkContainer to = { `/${ props.name }/${ item.id }` } key={ index }  >
                <Bootstrap.Dropdown.Item  key={ item.id } onClick={ ( ) => props.clicked( item.id ) }>
                    { item.name }
                </Bootstrap.Dropdown.Item>
            </LinkContainer>
         )
    } );

    return (
        <Bootstrap.Dropdown>
            <Bootstrap.Dropdown.Toggle variant="info" id="dropdown-basic" className={ classes.dropdownSize }  >
                { props.title }
            </Bootstrap.Dropdown.Toggle>
            <Bootstrap.Dropdown.Menu> { items }</Bootstrap.Dropdown.Menu>
        </Bootstrap.Dropdown>
    );
}
