/*
* model for covid.
*
* @author Vishnu
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const covid = sequelizeClient.define( 'covid', {
  
    newConfirmed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalConfirmed: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    newDeaths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalDeaths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    newRecovered: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalRecovered: {
        type: DataTypes.INTEGER,
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
  ( covid as any ).associate = function ( models: any ) {
    // Define associations here
    const { covid_countries } = models;
    covid.belongsTo( covid_countries, {
      foreignKey: {
        allowNull: false
      }}  );
  };

  return covid;
}
