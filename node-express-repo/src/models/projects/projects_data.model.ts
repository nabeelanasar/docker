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
  const projects_data = sequelizeClient.define( 'projects_data', {
    
    actualCost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    plannedCost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    actualSchedule: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    plannedSchedule: {
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
  ( projects_data as any ).associate = function ( models: any ) {
    // Define associations here
    const { projects } = models;
    projects_data.belongsTo( projects, {
      foreignKey: {
        allowNull: false
      }}   );
  };

  return projects_data;
}
