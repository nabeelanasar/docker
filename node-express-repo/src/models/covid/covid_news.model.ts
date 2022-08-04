/*
* model for news.
*
* @author Vishnu
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const covid_news = sequelizeClient.define( 'covid_news', {
  
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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
  ( covid_news as any ).associate = function ( models: any ) {
    // Define associations here
  };

  return covid_news;
}
