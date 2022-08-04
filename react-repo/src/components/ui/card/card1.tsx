/*
* Card.tsx.
*
* @author Viji
* @version 1.0.0
*/

import React, { Fragment }  from 'react';
import * as Bootstrap from 'react-bootstrap';

import classes from './card.module.css';
import productImage from '../../../assets/laptop.jpg';
import blog1Image from '../../../assets/blog1.png';
import service1image from '../../../assets/service1.png';
import { Image, Button, LinkContainer } from '../index'


export const Card = ( props: any ) => {

    let content: any;
    (props.children) ? content = props.children :  content = props;
    let cardJSX: any;
    switch(props.pageName) {
        case 'product': 
            cardJSX = <Bootstrap.Card>
                            <Image src={productImage} fluid />
                            <Bootstrap.Card.Body >
                                <Bootstrap.Card.Title>{ props.name }</Bootstrap.Card.Title>
                                <Bootstrap.Card.Subtitle> { props.price } </Bootstrap.Card.Subtitle>
                                <Bootstrap.Card.Text className="mb-2 text-muted"> { props.summary } </Bootstrap.Card.Text>
                                <Button variant="info" type="submit" onClick={ props.showProductDetails  } >Read More</Button>
                            </Bootstrap.Card.Body>
                        </Bootstrap.Card> 
        break; 
        case 'productPage':
            cardJSX = <Bootstrap.CardColumns>
                        {props.children}
                      </Bootstrap.CardColumns>
        break;
        case 'blogs':
            cardJSX =  <Bootstrap.Card>
                            <Bootstrap.Card.Header className={ classes.cardHeader }>{ content.title }</Bootstrap.Card.Header>
                            <Bootstrap.Card.Img variant="top" src={ blog1Image }   alt="HTML image"/>
                            <Bootstrap.Card.Body>
                                <Bootstrap.Card.Subtitle className="mb-2 text-muted">Posted on { content.date }</Bootstrap.Card.Subtitle>
                                <Bootstrap.Card.Text className={ classes.card }>
                                    { content.content }
                                </Bootstrap.Card.Text>
                                <LinkContainer to={ content.id  }>
                                    <Bootstrap.Nav.Link>
                                        <Bootstrap.Card.Text className={classes.more}> More... </Bootstrap.Card.Text>
                                    </Bootstrap.Nav.Link>
                                </LinkContainer>
                            </Bootstrap.Card.Body>
                                <Bootstrap.Card.Footer>
                                <small className="text-muted">Posted by { content.author }</small> 
                            </Bootstrap.Card.Footer>
                        </Bootstrap.Card>
        break;
        case 'blogDetails':
            cardJSX =  <Bootstrap.Card>
                            <Bootstrap.Card.Header className={ classes.cardHeader }>{ content.title }</Bootstrap.Card.Header>
                            <Bootstrap.Card.Img variant="top" src={ blog1Image } alt="HTML image"/>
                            <Bootstrap.Card.Body>
                                <Bootstrap.Card.Subtitle className="mb-2 text-muted">Posted by { content.author } on { content.date }</Bootstrap.Card.Subtitle>
                                <Bootstrap.Card.Text className={ classes.card }>
                                    { content.content }
                                </Bootstrap.Card.Text>
                                <Fragment>{content.form}{content.comments}</Fragment> 
                                <LinkContainer to={ content.id  }>
                                    <Bootstrap.Nav.Link>
                                        <Bootstrap.Card.Text className={classes.more}> Back...</Bootstrap.Card.Text>
                                    </Bootstrap.Nav.Link>
                                </LinkContainer>
                            </Bootstrap.Card.Body>
                        </Bootstrap.Card>
        break;
        case 'services':
            cardJSX =  <Bootstrap.Card>
                            <Bootstrap.Card.Header className={ classes.cardHeader }>{ content.title }</Bootstrap.Card.Header>
                            <Bootstrap.Card.Img variant="top" src={ service1image }  alt="HTML image"/>
                            <Bootstrap.Card.Body>
                                <Bootstrap.Card.Text className={ classes.card }>
                                    { content.content }
                                </Bootstrap.Card.Text>
                                <LinkContainer to={ content.id  }>
                                    <Bootstrap.Nav.Link>
                                        <Bootstrap.Card.Text className={classes.more}> More... </Bootstrap.Card.Text>
                                    </Bootstrap.Nav.Link>
                                </LinkContainer>
                            </Bootstrap.Card.Body>
                        </Bootstrap.Card>
        break;
        case 'serviceDetails':
            cardJSX =  <Bootstrap.Card>
                            <Bootstrap.Card.Header className={ classes.cardHeader }>{ content.title }</Bootstrap.Card.Header>
                            <Bootstrap.Card.Img variant="top" src={ service1image } alt="HTML image"/>
                            <Bootstrap.Card.Body>
                                <Bootstrap.Card.Text className={ classes.card }>
                                    { content.content }
                                </Bootstrap.Card.Text>
                                <LinkContainer to={ content.id  }>
                                    <Bootstrap.Nav.Link>
                                        <Bootstrap.Card.Text className={classes.more}> Back... </Bootstrap.Card.Text>
                                    </Bootstrap.Nav.Link>
                                </LinkContainer>
                            </Bootstrap.Card.Body>
                        </Bootstrap.Card>
        break;
        default: cardJSX = null;
   }

    return( cardJSX );
}
