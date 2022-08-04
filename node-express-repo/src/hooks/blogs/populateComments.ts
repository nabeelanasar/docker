/*
* hooks for blogs.
*
* @author Anisha
* @version 1.0.0
*/

import { Hook, HookContext } from '@feathersjs/feathers';
import { Sequelize } from 'sequelize';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {

  return async (context: HookContext): Promise<HookContext> => {
    
    const { app, method, result, params } = context;

    const sequalize: Sequelize = app.get('sequelizeClient');

    const blogs = method === "find" ? result.data : [result];

    await Promise.all(
        blogs.map(async(blog: any) => {
            blog.comments = await sequalize.model('blogs_comments').findAll({where: {blogId: blog.id}});
        })
    );

    return context;
  };
};
