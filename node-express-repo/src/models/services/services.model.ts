/*
* model for services.
*
* @author Viji
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const services = sequelizeClient.define( 'services', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    description: {
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
  ( services as any ).associate = function ( models: any ) {
    // Define associations here
    const { services_details, services_categories } = models;
    services.belongsTo( services_categories, {
      foreignKey: {
        allowNull: false
      }} );
    services.hasOne( services_details );
  };

  return services;
}
