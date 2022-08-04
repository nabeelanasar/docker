
/*
 * ApplyClass.tsx
 * 
 * @author Anusree
 * @version 1.0.0
 */

 import React from 'react';


export const ApplyClass = ( props: any ) => (

    <div className = { props.className }>{ props.children }</div>
);

const WrapClassToComponent = ( WrappedComponent: any, className: string ) => {

    return ( props: any ) => (
        <div className = { className }>
            <WrappedComponent { ...props }/>
        </div>
    );
}

export default WrapClassToComponent;
