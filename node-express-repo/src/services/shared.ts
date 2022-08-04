/*
* shared.
*
* @author Anisha
* @version 1.0.0
*/

export const findOptions = ( query: any, app: any ) => {
    
    let options: any = {};
    
    options['limit'] = Number( query?.$limit ?? app.get( 'paginate' ).default );

    options['offset'] =  Number( query?.$skip ?? 0 );
    
    if ( query?.$select ) {
    
      options['attributes'] = query.$select;
    }
    
    if ( query?.$sort ) {
    
      const fieldName = Object.keys( query.$sort )[0];
      const sort = query.$sort[fieldName];
      if ( sort === '1' || sort === '-1' ) {
        options['order'] =  [[fieldName, (sort==='1')? 'ASC' : 'DESC']];
      }
    }
    
    return ( options );
}
