/*
* Form For Product Project Covid.
*
* @author Anusree
* @version 1.0.0
*/

import React  from 'react';

import { Button, Input1 } from '../../ui/index';


export const Form2  = ( props: any ) => {

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
                focusRef ={ (index === 0) ? props.focusRef : null }/>
        );
    });

    return (       
        <form className="ui form">
            <div className="field">
                { formControlsJSX }
            </div>
            <div>
                { (props.submitText)?
                <Button disabled = { !props.formIsValid } onClick = { props.onSubmit }>{ props.submitText }</Button>
                : null }
            </div>
        </form>
    );
}
	