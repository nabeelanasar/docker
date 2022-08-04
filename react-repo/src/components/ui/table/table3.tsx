/*
 * Table3 for covid.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React  from 'react';

import { Label } from '../index'


export const Table3 = ( props: any ) => {
    
    return (
        <div className="ui container">
            <table className="ui table">
                <thead>
                    <tr>
                        <th colSpan={ 2 }>DAILY STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Confirmed: </td>
                        <td><b><Label className = "ui fluid right aligned yellow label">{ props.new_confirmed }</Label></b></td>
                    </tr>
                    <tr>
                        <td>Recovered: </td>
                        <td><b><Label className = "ui fluid right aligned green label">{ props.new_recovered }</Label></b></td>
                    </tr>
                    <tr>
                        <td>Deaths  : </td>
                        <td><b><Label className = "ui fluid right aligned red label">{ props.new_deaths }</Label></b></td>
                    </tr>
                </tbody>
            </table>
            <table className="ui table">
                <thead>
                    <tr>
                        <th colSpan = { 2 }>TOTAL CASES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Confirmed: </td>
                        <td><b ><Label className = "ui fluid right aligned yellow label">{ props.total_confirmed }</Label></b></td>
                    </tr>
                    <tr>
                        <td>Total Recovered: </td>
                        <td><b><Label className = "ui fluid right aligned green label">{ props.total_recovered }</Label></b></td>
                    </tr>
                    <tr>
                        <td>Total Deaths  : </td>
                        <td><b><Label className = "ui fluid right aligned red label">{ props.total_deaths }</Label></b></td>
                    </tr>
                    <tr>
                        <td>Last Updated on </td>
                        <td>{ props.date }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
