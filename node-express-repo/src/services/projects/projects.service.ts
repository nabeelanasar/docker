/*
* service for projects_name.
*
* @author Anusree
* @version 1.0.0
*/

// Initializes the `users` service on path `/projects_name`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import { Projects } from './projects.class';
import createModel from '../../models/projects/projects.model';
import hooks from './projects.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'projects': Projects & ServiceAddons<any>;
  }
}

export default function (app: any) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.v1.use('/projects', new Projects(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.v1.service('projects');

  service.hooks(hooks);
}
