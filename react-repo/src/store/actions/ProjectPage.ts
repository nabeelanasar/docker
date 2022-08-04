/*
* Action ProjectPage.tsx.
*
* @author Anusree
* @version 1.0.0
*/

import * as actionTypes from './actionTypes';
import axios, { projectsURL } from '../../axios';


export const setSelectedProject = ( selectedProjectId: any ) => {

    return {
        type: actionTypes.SET_SELECTED_PROJECT,
        details: null,
        data: null,
        selectedProjectId: selectedProjectId
    }
}

const rearrangeChartData = ( data: any ) => {

    const dataArray = [ ] ;
    const actualCost = [ ];
    const plannedCost = [ ];
    const actualSchedule = [ ];
    const plannedSchedule = [ ];
    const dateArray = [ ];
    let date;
    let projectId;

    for ( const params of data ) {
        projectId = params.projectId;
        actualCost.push(params.actualCost);
        plannedCost.push(params.plannedCost);
        actualSchedule.push(params.actualSchedule);
        plannedSchedule.push(params.plannedSchedule);
        date = params.date.substring(5, 10);
        dateArray.push( date );
    }

    dataArray.push( {projectId: projectId, actualCost: actualCost, plannedCost: plannedCost, actualSchedule: actualSchedule, plannedSchedule: plannedSchedule, date: dateArray} );
    return( dataArray[0] );
}

export const setProjectPage = ( details: any, data: any, projects: any, selectedProjectId: any ) => {

    const graphData = rearrangeChartData( data );
    
    return {
        type: actionTypes.INIT_PROJECTPAGE,
        details: details,
        data: graphData,
        projects: projects,
        selectedProjectId: selectedProjectId 
    }
}

export const setUpdatedProjectDetails = ( details: any, data: any, selectedProjectId: any ) => {

    const graphData = rearrangeChartData( data );

    return {
        type: actionTypes.UPDATE_PROJECT_DETAILS,
        details: details,
        data: graphData,
        selectedProjectId: selectedProjectId 
    }
}

export const fetchProjectPageFailed = ( errorData: any ) => {
    return {
        type: actionTypes.FETCH_PROJECTPAGE_FAILED,
        error: errorData   
    }
}

export const noDataPage = ( noData: boolean ) => {
    return {
        type: actionTypes.FETCH_PROJECTPAGE_EMPTY,
        noData: noData   
    }
}

export const initProjectPage = ( selectedProjectId: any ) => {

    return ( dispatch: any ) => {
        
        const urls = [
            `${projectsURL}`
        ];

        const requests = urls.map( url => axios.get(url) );
    
        Promise.all( requests )
            .then( responses => {
                const [ details ] = [ ...responses ];
                
                if ( details?.data?.data[0] ) {

                    const projects = details.data.data.map( (item: any) => {
                        return { id: item.id, projectName: item.projectName }
                    } );
                    
                    selectedProjectId = details.data.data[0].id;
                    
                    const url: string = `${projectsURL}/${selectedProjectId}`;

                    axios.get( url )
                    .then( response => {
                        dispatch( setProjectPage(response.data, response.data.data, projects, selectedProjectId) );
                    })
                    .catch( (error: any) => {
                        const errorData = {...error.response.data};
                        const err = {
                            message: errorData.message,
                            code: errorData.code
                        }
                        dispatch( fetchProjectPageFailed( err ) );
                    }); 
                } else {
                    dispatch( noDataPage( true ) );
                }
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchProjectPageFailed( err ) );
            })  
    }
}

export const updateProjectDetails = ( selectedProjectId: any ) => {
    return ( dispatch: any ) => {
        const urls = [
            `${projectsURL}/${selectedProjectId}`
        ];
    
        const requests = urls.map( url => axios.get(url) );
    
        Promise.all( requests )
            .then( responses => {
                const [ details ] = [ ...responses ];
                if ( details.data.data.length > 0 ) {
                    dispatch( setUpdatedProjectDetails(details.data, details.data.data, selectedProjectId) );
                } else {
                    dispatch( noDataPage( true ) );
                }
            })
            .catch( (error: any) => {
                const errorData = {...error.response.data};
                const err = {
                    message: errorData.message,
                    code: errorData.code
                }
                dispatch( fetchProjectPageFailed( err ) );
            })
    }
}
