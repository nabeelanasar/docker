/*
* service for blogs_categories.
*
* @author Anisha
* @version 1.0.0
*/

// Initializes the `blogs_categories` service on path `/blogs_categories`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import { Blogs } from './blogs.class';
import createModel from '../../models/blogs/blogs.model';
import hooks from './blogs.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'blogs': Blogs & ServiceAddons<any>;
  }
}

export default function (app: any) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.v1.use('/blogs', new Blogs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.v1.service('blogs');

  service.hooks(hooks);
}
