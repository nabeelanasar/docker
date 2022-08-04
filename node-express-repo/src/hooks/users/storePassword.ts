/*
* model for users.
*
* @author Viji
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app, method, data, params } = context;

    // store password (before hashing) in app variable
    app.set(data.email, data.password)

    return context;
  };
};
