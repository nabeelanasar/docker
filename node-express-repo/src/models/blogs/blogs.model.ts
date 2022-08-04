/*
* model for blogs.
*
* @author Anisha
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const blogs = sequelizeClient.define( 'blogs', {
  
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    author: {
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
  ( blogs as any ).associate = function ( models: any ) {
    // Define associations here
    const { blogs_comments, blogs_categories } = models;
    blogs.belongsTo( blogs_categories, {
      foreignKey: {
        allowNull: false
      }} );
    blogs.hasMany( blogs_comments );
  };

  return blogs;
}
