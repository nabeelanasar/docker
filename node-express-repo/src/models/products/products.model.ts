/*
* model for products.
*
* @author Vineetha
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const products = sequelizeClient.define( 'products', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
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
  ( products as any ).associate = function ( models: any ) {
    // Define associations here
    const { products_categories } = models;
    products.belongsTo( products_categories, {
      foreignKey: {
        allowNull: false
      }}  );
  };

  return products;
}