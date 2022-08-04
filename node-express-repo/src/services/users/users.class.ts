/*
* model for users.
*
* @author Vishnu
* @version 1.0.0
*/

import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';


export class Users extends Service {
  
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
