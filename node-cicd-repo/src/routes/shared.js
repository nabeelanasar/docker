/*
 * blogs.js
 * 
 * @author Anisha
 * @version 1.0.0
 */

 
function stringRepeat( arr, name ) {
    
    arr.forEach( function(obj) {

        if ( name in obj ) {

            if ( obj[name].length < 150 ) {
                
                obj[name] = ` ${obj[name].repeat(20)} ` ;
            }
        }
    });
}


module.exports = stringRepeat;