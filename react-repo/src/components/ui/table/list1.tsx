/*
 * list.tsx.
 * 
 * @author Vineetha Vijayan 
 * @version 1.0.0
 */

import React  from 'react';
import * as Bootstrap  from 'react-bootstrap';

import classes from './list.module.css';
import { LinkContainer } from '../index';
import { Label } from '../index'


export const List = ( props: any ) => {

    let listJSX: any;
    let items: any;

    switch ( props.pageName ){
        case 'blogs':
            items = props.items.map( (item: any, index: number) => {

                return (
                    <LinkContainer to={ `/${ props.name }/${ item.id }` } key={ index }>
                        <Bootstrap.ListGroup.Item action variant="light" onClick={ ( ) => props.clicked( item.id ) }>
                            { item.name }
                        </Bootstrap.ListGroup.Item>
                    </LinkContainer>
                 )
            } );
        
            listJSX = <Bootstrap.ListGroup defaultActiveKey={`/${ props.name }/${ props.defaultSelect }`} className={classes.list}>
                        <Bootstrap.ListGroup.Item variant="success" className={classes.listFont}>{ props.title }</Bootstrap.ListGroup.Item>
                        {items}
                     </Bootstrap.ListGroup>
            break;
        case 'services':
            items = props.items.map( (item: any, index: number) => {

                return (
                    <LinkContainer to={ `/${ props.name }/${ item.id }` } key={ index }>
                        <Bootstrap.ListGroup.Item action variant="light" onClick={ ( ) => props.clicked( item.id ) }>
                            { item.name }
                        </Bootstrap.ListGroup.Item>
                    </LinkContainer>
                    )
            } );
        
            listJSX = <Bootstrap.ListGroup defaultActiveKey={`/${ props.name }/${ props.defaultSelect }`} className={classes.list}>
                        <Bootstrap.ListGroup.Item variant="success" className={classes.listFont}>{ props.title }</Bootstrap.ListGroup.Item>
                        {items}
                        </Bootstrap.ListGroup>
            break;
        case 'project':
            listJSX = <Bootstrap.ListGroup >
                            <Bootstrap.ListGroup.Item variant="success" className={ classes.titleFont }>{ props.name }</Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Cost : <b>{ props.cost }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Schedule : <b>{ props.schedule }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>
                             Status: <Label pill variant={ props.badgeVarient } className={ classes.badgeStyle } >{ props.status }</Label>
                            </Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Start Date :<b> { props.startDate }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>End Date :<b> { props.endDate }</b></Bootstrap.ListGroup.Item>
                        </Bootstrap.ListGroup> 
            break;
        case 'covid':
            listJSX =  <Bootstrap.ListGroup >
                            <Bootstrap.ListGroup.Item variant="success" className={ classes.covidText }>DAILY STATUS</Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Confirmed: <b>{ props.new_confirmed }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Recovered: <b>{ props.new_recovered }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }>Deaths  : <b>{ props.new_deaths }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item variant="success" className={ classes.covidText }>TOTAL CASES</Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }> Total Confirmed: <b>{ props.total_confirmed }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }> Total Recovered: <b>{ props.total_recovered }</b></Bootstrap.ListGroup.Item>
                            <Bootstrap.ListGroup.Item className={ classes.txtFont }> Total Deaths  : <b>{ props.total_deaths }</b></Bootstrap.ListGroup.Item>
                            <p className={classes.lastUpdated}>Last Updated on { props.date }</p>       
                        </Bootstrap.ListGroup> 
            break;
        default: listJSX = null;

    }

    return ( listJSX );
}
