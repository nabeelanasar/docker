/*
* hooks for blogs.
*
* @author Anisha
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';
import ms from 'ms';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app } = context;

    const config = app.get('authentication');
    const { jwtOptions } = config

    context.result = {
        ...context.result,
        expiresIn: ms(jwtOptions.expiresIn)
    }

    return context;
  };
};
