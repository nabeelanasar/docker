/*
* model for blogs_categories.
*
* @author Anisha
* @version 1.0.0
*/

import { Sequelize, DataTypes, Model } from 'sequelize';
import { HookReturn } from 'sequelize/types/lib/hooks';
import { Application } from '../../declarations';


export default function ( app: Application ): typeof Model {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const blogs_categories = sequelizeClient.define( 'blogs_categories', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  }, {
    hooks: {
      beforeCount( options: any ): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  ( blogs_categories as any ).associate = function ( models: any ) {
    // Define associations here
    const { blogs } = models;
    blogs_categories.hasMany( blogs );
  };

  return blogs_categories;
}
