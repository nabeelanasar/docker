/*
* Form for blog details.
*
* @author Anisha
* @version 1.0.0
*/

import React  from 'react';

import { Button, Input1 } from '../index';


export const Form  = ( props: any ) => {

    let formElementArray: any[ ] = [ ];

    for ( let [key, value] of Object.entries(props.formConfig) ) {

        formElementArray.push( {name: key, config: value} );
    }

    let formControlsJSX = formElementArray.map( (item: any, index: number) => {
        return(
            <Input1
                config = { item.config }
                name = { item.name }
                key = { item.name }
                onChange = { props.onChange }
                focusRef = { (index === 0)?props.focusRef : null }
            />
        );
    });

    return (  
        <form className = "ui form">
            <div className="ui two column stackable left aligned grid">
                <div className="column">
                    { formControlsJSX.slice(3,4) }
                    { formControlsJSX.slice(2,3) }
                    { formControlsJSX.slice(4,5) }
                    { formControlsJSX.slice(1,2) }
                    { formControlsJSX.slice(0,1) }
                </div>
            </div>
            <div>
                { (props.submitText)?
                <Button disabled = { !props.formIsValid } onClick = { props.onSubmit }>{ props.submitText }</Button>
                : null }
            </div>
        </form>
    );
}
