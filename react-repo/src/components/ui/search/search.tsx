/*
* Search.tsx.
*
* @author Vineetha
* @version 1.0.0
*/

import React from 'react';


export const Search = ( props:any ) => {

    return (
        <div className = "ui fluid category search">
            <div className = "ui icon input">
                <input
                    type = "text"
                    id = "txtSearch"
                    placeholder = "Search"
                    onChange = { props.onChange }/>
                <i className = "search icon"></i>
            </div>
            <div className = "results"></div>
        </div>
    );
}
