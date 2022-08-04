/*
* model for services_details.
*
* @author Viji
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const services_details = sequelizeClient.define( 'services_details', {
  
    details: {
      type: DataTypes.TEXT,
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
  ( services_details as any ).associate = function ( models: any ) {
    // Define associations here
    const { services } = models;
    services_details.belongsTo( services );

  };

  return services_details;
}
