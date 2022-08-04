/*
 * Table2 for projects.
 * 
 * @author Anusree
 * @version 1.0.0
 */

import React  from 'react';

import { Label } from '../index';


export const Table2 = ( props: any ) => {

   return (
        <div className="ui container">
            <table className="ui table">
                <thead>
                    <tr>
                        <th colSpan = { 2 }>{ props.name }</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cost : </td>
                        <td><b>{ props.cost }</b></td>
                    </tr>
                    <tr>
                        <td>Schedule : </td>
                        <td><b>{ props.schedule }</b></td>
                    </tr>
                    <tr>
                        <td>Status: </td>
                        <td><Label className = { props.variant } >{ props.status }</Label></td>
                    </tr>
                    <tr>
                        <td>Start Date :</td>
                        <td><b>{ props.startDate }</b></td>
                    </tr>
                    <tr>
                        <td>End Date :</td>
                        <td><b>{ props.endDate }</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
