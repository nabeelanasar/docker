/*
* person.tsx
*
* @author Anusree
* @version 1.0.0
*/

import React, { Component } from 'react';

import classes from './person.module.css';


interface Props {
    id: string,
    name: string,
    age: number,
    clicked: any
}

class Person extends Component<Props> {

    render( ) {
        return (
            <div className = {classes.person}>
            <h3 onClick = { () => this.props.clicked(this.props.id) }>{ this.props.name }</h3>
            <h3>{ this.props.age }</h3>
            </div>
        );
    }

}

export default Person;
