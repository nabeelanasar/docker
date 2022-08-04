/*
* hooks for Services.
*
* @author Viji
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';
import { Sequelize } from 'sequelize';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app, method, result, params } = context;

    const sequalize: Sequelize = app.get('sequelizeClient');

    const services = method === "find" ? result.data : [result];

    await Promise.all(
        services.map(async(service: any) => {
            service.details = await sequalize.model('services_details').findAll({where: {serviceId: service.id}});
        })
    );

    return context;
  };
};
