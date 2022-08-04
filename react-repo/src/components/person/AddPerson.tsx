/*
* AddPerson.tsx
*
* @author Anusree
* @version 1.0.0
*/

import React, { Component } from 'react';

import { Button } from '../ui'


interface Props {
    clicked: any
}

class AddPerson extends Component<Props> {

    state = {
        name: 'steve',
        age: '23'
    }

    nameChangeHandler = ( event: any ) => {
        this.setState( {name: event.target.value} );
    }

    ageChangeHandler = ( event: any ) => {
        this.setState( {age: event.target.value} );
    }

    render( ) {
        return (
            <div>
            <input type='text' placeholder='Name' value={ this.state.name } onChange={ this.nameChangeHandler }/>
            <input type='number' placeholder='Age' value={ this.state.age } onChange={ this.ageChangeHandler }/>
            <Button variant="warning" onClick={ ( ) => this.props.clicked( this.state.name, this.state.age ) }>Add Person</Button>
            </div>
        );
    }

}

export default AddPerson;
