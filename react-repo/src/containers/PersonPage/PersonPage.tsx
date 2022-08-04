/*
 * PersonPage.tsx
 * 
 * @author Anusree
 * @version 1.0.0
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../../components/person/person'
import AddPerson from '../../components/person/AddPerson'
import * as actionCreators from '../../store/actions/index';


interface Props {
    persons: [ ];
    onAddPerson: any;
    onRemovePerson: any;
}

class PersonPage extends Component<Props> {

    render( ) {
        let personJSX: any = ( 
            <div>
                <AddPerson clicked = { this.props.onAddPerson }/>
                { this.props.persons.map( (item: any) => (
                    <Person
                        id = { item.id }
                        key = { item.id }
                        name = { item.name }
                        age = { item.age }
                        clicked = { this.props.onRemovePerson }/>
                ))}
            </div>
        );
        return( personJSX );
    }
}

const mapStoreToProps = ( state: any ) => {
    
    return {
        persons: state.person.persons
    }
}

const matchDispatchProps = ( dispatch: any ) => {

    return {
        onAddPerson: ( name: string, age: number ) => dispatch( actionCreators.addPerson({name: name, age: age}) ),
        onRemovePerson: ( id: any ) => dispatch( actionCreators.removePerson(id) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( PersonPage );
