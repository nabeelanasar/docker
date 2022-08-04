/*
 * Message.tsx
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React  from 'react';
// import { Transition } from 'semantic-ui-react';

import { Transition } from '../index';


export const Message = ( props: any ) => {
   
    return (
        
        <div className = "sixteen wide column"> 
            <h3 className = "ui dividing header">{ props.title }</h3>
            <Transition visible = { props.content? true:false } animation = 'fly left' duration = { 1000 }>
                <div className = "comment">
                    <div className = "content">
                        <span className = "ui tiny header author">{ props.source }</span>
                        <div className = "metadata">
                            <span className="ui small grey text">{ props.time }</span>
                        </div>
                        <div className = "text">
                           { props.content }
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}
