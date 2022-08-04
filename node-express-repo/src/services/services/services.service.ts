/*
* services for services_categories.
*
* @author Viji
* @version 1.0.0
*/

// Initializes the `services_categories` service on path `/services_categories`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import { Services } from './services.class';
import createModel from '../../models/services/services.model';
import hooks from './services.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'services': Services & ServiceAddons<any>;
  }
}

export default function (app: any) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.v1.use('/services', new Services(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.v1.service('services');

  service.hooks(hooks);
}

