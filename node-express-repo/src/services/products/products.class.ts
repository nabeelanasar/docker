/*
* model for products_categories.
*
* @author Vineetha
* @version 1.0.0
*/

import { Sequelize } from 'sequelize';
import { Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { findOptions } from '../shared';

export class Products extends Service {

  app: any;
  
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  find(params?: Params) {

    if ( params?.query?.q === 'categories') {

      const sequalize: Sequelize = this.app.get('sequelizeClient');

      let options: any = findOptions( params.query, this.app );

      return sequalize.model('products_categories').findAndCountAll( options )
        .then((value: any) => {
          return {
            total: value.count,
            limit: options.limit,
            skip: options.offset,
            data: value.rows
          }
        });
    }

    return super.find(params);
  }
}
