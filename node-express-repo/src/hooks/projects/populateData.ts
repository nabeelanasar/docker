/*
* hooks for Projects.
*
* @author Anusree
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';
import { Sequelize } from 'sequelize';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app, method, result, params } = context;

    const sequalize: Sequelize = app.get('sequelizeClient');

    const projects = method === "find" ? result.data : [result];

    await Promise.all(
        projects.map(async(project: any) => {
            project.data = await sequalize.model('projects_data').findAll({where: {projectId: project.id}});
        })
    );

    return context;
  };
};
