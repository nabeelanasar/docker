/*
* class for blogs_categories.
*
* @author Anisha
* @version 1.0.0
*/

import { Sequelize } from 'sequelize';
import { Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { findOptions } from '../shared';
 

export class Blogs extends Service {
  
  app: any = null;

  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  create(data: any, params?: Params) {

    if ( params?.query?.q === 'comments') {

      const sequalize: Sequelize = this.app.get('sequelizeClient');
      return sequalize.model('blogs_comments').create(data);
    }

    return super.create(data, params);
  }
  
  find(params?: Params) {

    if ( params?.query?.q === 'categories' ) {

      const sequalize: Sequelize = this.app.get( 'sequelizeClient' );

      let options: any = findOptions( params.query, this.app );

      return sequalize.model('blogs_categories').findAndCountAll( options )
        .then((value: any) => {
          return {
            total: value.count,
            limit: options.limit,
            skip: options.offset,
            data: value.rows
          }
        });
    }

    return super.find( params );
  }
}
