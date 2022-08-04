/*
* model for products_categories.
*
* @author Vineetha
* @version 1.0.0
*/

// Initializes the `products_categories` service on path `/products_categories`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';

import { Products } from './products.class';
import createModel from '../../models/products/products.model';
import hooks from './products.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'products': Products & ServiceAddons<any>;
  }
}

export default function (app: any) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.v1.use('/products', new Products(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.v1.service('products');

  service.hooks(hooks);
}
