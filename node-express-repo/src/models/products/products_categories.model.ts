/*
* model for products_categories.
*
* @author Vineetha
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const products_categories = sequelizeClient.define( 'products_categories', {
  
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
  ( products_categories as any ).associate = function ( models: any ) {
    // Define associations here
    const { products } = models;
    products_categories.hasMany( products );
  };

  return products_categories;
}