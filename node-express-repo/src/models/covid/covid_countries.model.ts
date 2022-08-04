/*
* model for covid_countries.
*
* @author Vishnu
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const covid_countries = sequelizeClient.define( 'covid_countries', {
  
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
  ( covid_countries as any ).associate = function ( models: any ) {
    // Define associations here
    const { covid } = models;
    covid_countries.hasMany( covid );
  };

  return covid_countries;
}
