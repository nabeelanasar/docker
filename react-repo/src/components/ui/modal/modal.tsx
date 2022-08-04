/*
* Modal.tsx.
*
* @author Anusree
* @version 1.0.0
*/

import React from 'react';
import * as Bootstrap  from 'react-bootstrap';

import { Button, Image } from '../index'


export const Modal = ( props: any ) => {

    return(
        <Bootstrap.Modal show={ props.show } onHide={ props.onHide}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Bootstrap.Modal.Header closeButton>
            </Bootstrap.Modal.Header>
            <Bootstrap.Modal.Body>
                <Bootstrap.Card.Body>
                    <Image src={props.image} fluid />
                    <Bootstrap.Card.Text> {props.name} </Bootstrap.Card.Text>
                    <Bootstrap.Card.Text> {props.price} </Bootstrap.Card.Text>
                    <Bootstrap.Card.Text> {props.details} </Bootstrap.Card.Text>
                </Bootstrap.Card.Body>
            </Bootstrap.Modal.Body>
            <Bootstrap.Modal.Footer>
                <Button variant="info" onClick={ props.onHide}>Ok</Button>
            </Bootstrap.Modal.Footer>
        </Bootstrap.Modal>
    );
}
