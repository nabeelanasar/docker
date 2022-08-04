/*
* model for blogs_comments.
*
* @author Anisha
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const blogs_comments = sequelizeClient.define( 'blogs_comments', {
  
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
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
  ( blogs_comments as any ).associate = function ( models: any ) {
    // Define associations here
    const { blogs } = models;
    blogs_comments.belongsTo( blogs );
  };

  return blogs_comments;
}
