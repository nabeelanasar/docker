/*
* BlogDetailComment.
*
* @author Anisha
* @version 1.0.0
*/

import React from 'react';


export const Comment = ( props: any ) => {

    let items: any;
    items = props.items.map( (item: any, index: number) => {
      return (
        <div className = "comment" key = { index }>
          <div  className = "avatar" >
            <img  src = { props.image } alt = ''/>
          </div>
          <div className = "content">
            <span className = "author">{ item.email }</span>
            <div className = "text">
              { item.comment }
            </div>
          </div>
        </div>
      ) 
    } );

   return (
    <div className = "ui comments">
      <h3 className = "ui dividing header">Comments</h3>
        { items }
    </div>
  );
}
