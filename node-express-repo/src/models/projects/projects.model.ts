/*
* model for projects_types.
*
* @author Anusree
* @version 1.0.0
*/

import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../../declarations';


export default function ( app: Application ) {

  const sequelizeClient: Sequelize = app.get( 'sequelizeClient' );
  const projects = sequelizeClient.define( 'projects', {
  
    projectName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    schedule: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
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
  ( projects as any ).associate = function ( models: any ) {
    // Define associations here
    const { projects_data } = models;
    projects.hasMany( projects_data );
  };

  return projects;
}
