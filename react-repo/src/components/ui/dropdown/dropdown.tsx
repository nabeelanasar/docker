/*
* Dropdown.
*
* @author Vishnu
* @version 1.0.0
*/

import React from 'react';


export const Dropdown = ( props: any ) => {

    return ( 
        <div className = "field">
            <select onChange = { props.onChange } ref = { props.focusRef } value=  { props.selected }>
                {
                    props.options.map( (option: any) => {
                        return (
                            <option value = { option.value } key={ option.value } >{ option.displayValue }</option>
                        );
                    } )
                }
            </select>
        </div>
    );
}
