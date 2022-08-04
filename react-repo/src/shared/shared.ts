/*
 * Shared.tsx.
 * 
 * @author Anisha
 * @version 1.0.0
 */

export const checkValidity = ( value: any, rules: any ) => {

    let isValid = true;

    if ( !rules ) {
        return true;
    }

    if( rules.isEmail ) {
        const pattern = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        isValid = pattern.test(value) && isValid;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }

    if ( rules.maxLength ) {
        isValid = value.trim().length <= rules.minLength && isValid;
    }

    return isValid;
}

export const updateObject = ( oldObject: any, updatedValues: any ) => {

    return {
        ...oldObject,
        ...updatedValues
    }
}
