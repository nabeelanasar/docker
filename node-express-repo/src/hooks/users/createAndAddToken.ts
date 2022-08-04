/*
* model for users.
*
* @author Vineetha
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';
import { Service } from 'feathers-sequelize';
import ms from 'ms';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app, result } = context;

    let service: Service = app.service('authentication');

    await service.create({
      strategy: 'local',
      email: result.email,
      password: app.get(result.email)
    })
    .then((response: any) => {
        //  create token & include in response
        const config = app.get('authentication');
        const { jwtOptions } = config

        context.result = {
          id: result.id,
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName,
          phone: result.phone,
          accessToken: response.accessToken,
          expiresIn: ms(jwtOptions.expiresIn)
        };
        console.log('Create token success :', response.accessToken);
        return response.accessToken;
    })
    .catch((error: any) => {
      console.log('Create token error :', error);
    })

    return context;
  };
};
