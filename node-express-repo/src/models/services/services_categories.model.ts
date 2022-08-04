/*
* model for services_categories.
*
* @author Viji
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const services_categories = sequelizeClient.define( 'services_categories', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  }, {
    hooks: {
      beforeCount( options: any ) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  ( services_categories as any ).associate = function ( models: any ) {
    // Define associations here
    const { services } = models;
    services_categories.hasMany( services );
  };

  return services_categories;
}
