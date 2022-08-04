/*
* service for covid_countries.
*
* @author Vishnu
* @version 1.0.0
*/

// Initializes the `countries` service on path `/countries`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import { Covid } from './covid.class';
import createModel from '../../models/covid/covid.model';
import hooks from './covid.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'covid': Covid & ServiceAddons<any>;
  }
}

export default function (app: any) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.v1.use('/covid', new Covid(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.v1.service('covid');

  service.hooks(hooks);
}
