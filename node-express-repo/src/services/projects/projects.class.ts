/*
* class for projects_name.
*
* @author Anusree
* @version 1.0.0
*/

import { Sequelize } from 'sequelize';
import { Id, Params } from '@feathersjs/feathers';
import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { findOptions } from '../shared';


export class Projects extends Service {

  app: any;
  
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
    this.app = app;
  }

  create(data: any, params?: Params) {

    if ( params?.query?.q === 'data') {

      const sequalize: Sequelize = this.app.get('sequelizeClient');
      return sequalize.model('projects_data').create(data);
    }

    return super.create(data, params);
  }

  find(params?: Params) {

    if ( params?.query?.q === 'data') {

      const sequalize: Sequelize = this.app.get('sequelizeClient');

      let options: any = findOptions( params.query, this.app );

      return sequalize.model('projects_data').findAndCountAll( options )
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
