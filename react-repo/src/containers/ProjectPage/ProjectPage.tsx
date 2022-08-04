/*
* ProjectPage
*
* @author Anusree Mohan
* @version 1.0.0
*/

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { produce } from  'immer';

import Chart from '../../components/shared/chart/chart';
import * as actionCreators from '../../store/actions/index';
import { Table2, Message, Breadcrumb, Form2 } from '../../components/ui/index';
import Layout5 from '../../hoc/ApplyLayouts/Layout5';


interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  details: any;
  data: any;
  projects: any;
  selectedProjectId: any;
  error: any;
  noData: any;
  onInitProjectPage: any;
  onProjectUpdatecDetails: any;
  onSetSelectedProject: any;
}

enum costChartFetaures {

  label = 'Cost',
  chartLabelActual = 'Actual',
  chartLabelPlanned = 'Planned',
  borderColorActual = '',
  backgroundColorActual = '#06d6a0', 
  borderColorPlanned = '#073b4c', 
  backgroundColorPlanned = '#073b4c'
}

enum scheduleChartFetaures {

  label = 'Schedule',
  chartLabelActual = 'Actual',
  chartLabelPlanned = 'Planned',
  borderColorActual = '#118ab2',
  backgroundColorActual = '#118ab2', 
  borderColorPlanned= '#ef476f', 
  backgroundColorPlanned= '#ef476f'
}

enum ProjectStatus {

  OnTrack = 'OnTrack',
  Delayed = 'Delayed',
  Critical = 'Critical'
}

class ProjectPage extends Component<Props> {

  dropDownProjects: React.RefObject<HTMLSelectElement>;

  constructor( props: any ) {
    super( props );
    this.dropDownProjects = React.createRef<HTMLSelectElement>( );
  }

  DEFAULT_PROJECT_ID = '1';

  state = {
    form: {
      preference: {
        elementType: 'select',
        elementConfig: {
            type: 'select',
            options: [ ],
            label: '',
            warning: '',
            help: ''
        },
        validation: {
            required: false
        },
        valid: true,
        touched: false
      }
    }
  }

  inputChangeHandler = ( event: any ) => {
    
    const selectedProjectId = event.target.value;

    if ( selectedProjectId !== this.props.selectedProjectId ) {

      this.props.history.push(`/projects/${selectedProjectId}`);
      this.props.onSetSelectedProject( selectedProjectId ); 
    }
  }

  render( ) {

    // console.log( 'ProjectPage rendering...' );
    
    let projects: any = this.props.projects;
    let projectListJSX: any;

    if ( projects ) {

      let options = projects.map( (option: any) => {
        return { value: option.id, displayValue: option.projectName }
      } );
      
      let updatedForm = produce( this.state.form, (formControl:any) => {
        formControl[ 'preference' ].elementConfig.options = options;
      } );

      projectListJSX = (
        <Form2
            formConfig = { updatedForm }
            onChange = { this.inputChangeHandler }
            focusRef = { this.dropDownProjects }
        />
      );
    }
    // console.log("------",this.props.data)
    let project: any = this.props.details;
    let data: any = this.props.data;
    let projectDetailsJSX: any;
    let projectDescriptionJSX: any = '';

    if ( project && data ) {

      projectDetailsJSX = this.getProjectDetail( project );
      projectDescriptionJSX = ( 
        <Message
          variant = "success"
          content = { project.description }
          title= { `About ${this.getProjectNameFromId(project.id)}` }/> 
      );
      
    } 

    let costChartJSX: any = '';
    let scheduleChartJSX: any = '';

    if ( data ) {
      // console.log("------",data[0].actualCost)
      costChartJSX = this.getChartJSX( data.actualCost, data.plannedCost, data.date, costChartFetaures );
      scheduleChartJSX = this.getChartJSX( data.actualSchedule, data.plannedSchedule,data.date, scheduleChartFetaures );
    }

    if ( this.props.error ) {

      projectDetailsJSX = (
        <Message
          variant = "warning"
          content = {`${ this.props.error.code } ${ this.props.error.message }`}
        />
      );
    }

    let breadCrumbJSX = (
      <Breadcrumb 
        items = { null }
        active = 'Projects'/>
    );
                      
    return (
      <Fragment>
        <Layout5
            breadCrumbJSX = { breadCrumbJSX }
            projectListJSX = { projectListJSX }
            projectDetailsJSX = { projectDetailsJSX }
            projectDescriptionJSX = { projectDescriptionJSX }
            costChartJSX = { costChartJSX }
            scheduleChartJSX = { scheduleChartJSX }
            noData = { this.props.noData }/>
      </Fragment>
    );
  }

  getStatus ( data: any): any {
    //let data  = ( projects.projects_data.filter((item) => item.project_id === req.params.id) );
    
    let actualCost: any = [ ];
    let plannedCost: any = [ ];
    let actualSchedule: any = [ ];
    let plannedSchedule: any = [ ];
    //let projectId;

    for ( let params of data ) {
       // projectId = params.projectId;
        actualCost.push( params.actualCost );
        plannedCost.push( params.plannedCost );
        actualSchedule.push( params.actualSchedule );
        plannedSchedule.push (params.plannedSchedule );
       
    }
    let diff: any = Math.max( (actualCost.slice(-1) - plannedCost.slice(-1)), (actualSchedule.slice(-1) - plannedSchedule.slice(-1)) );
    let projectStatus = '';

    switch (true) {
        case ( diff > 10 ):
            projectStatus = 'Critical';
            break;  
        case (  diff > 5 && diff <= 10 ):
            projectStatus = 'Delayed';
            break;
        default:
            projectStatus = 'OnTrack';
    }
    return( projectStatus );
  }

  getProjectDetail( details: any ){

    let variant: string;
    
    switch ( this.getStatus(details.data) ) {

      case ProjectStatus.Delayed :
          variant = 'ui fluid center aligned yellow label';
          break;
      case ProjectStatus.Critical:
          variant = 'ui fluid center aligned red label';
          break;
      default: 
          variant = 'ui fluid center aligned green label';
    }
    

    let projectJSX :any = '';

    projectJSX = (
      <Table2
        name = { this.getProjectNameFromId(details.id) }
        cost = { details.cost }
        schedule = { details.schedule }
        variant = { variant }
        status = { this.getStatus(details.data) }
        description = { details.description }
        startDate = { details.startDate.substring(0, 10) }
        endDate = { details.endDate.substring(0, 10) }
        key = { details.id }/>
    );
    return projectJSX;
  }

  getChartJSX( actual: string, planned: string, date: string, data: any ): any {
    
    let chartJSX: any = '';
 
    const dataChart: any[ ] = [ 
        { label: data.chartLabelActual, data: actual, fill: true, borderColor: data.borderColorActual, backgroundColor: data.backgroundColorActual, borderDash: [ ] },
        { label: data.chartLabelPlanned, data: planned, fill: false, borderColor:data.borderColorPlanned, backgroundColor: data.backgroundColorPlanned, borderDash: [2,2] } 
    ];

    chartJSX = (
      <Chart 
        title = { `Project ${data.label}` }
        chartId = 'ProjectChart'
        xLabel = 'Date'
        yLabel = { data.label }
        labels = { date }
        dataChart = { dataChart }/>
    );
    
    return chartJSX;
  }

  componentDidMount( ) {

    let projectId = (this.props.selectedProjectId) ? this.props.selectedProjectId : this.DEFAULT_PROJECT_ID;

    this.props.onInitProjectPage( projectId );
  }

  componentDidUpdate( ) {

    this.dropDownProjects.current?.focus( );

    if ( !this.props.details && !this.props.data && !this.props.error ) {

        this.props.onProjectUpdatecDetails( this.props.selectedProjectId );
    }
  }

  getProjectNameFromId( id: any ): string {
        
    let projects: any = this.props.projects;

    return ( projects?.find(
        ( item: any ) => id === item.id
    )?.projectName );
  }

}

const mapStoreToProps = ( state: any ) => {

  return {
      details: state.projectPage.details,
      data: state.projectPage.data,
      projects: state.projectPage.projects,
      error: state.projectPage.error,
      noData: state.projectPage.noData,
      selectedProjectId: state.projectPage.selectedProjectId
  }
}

const matchDispatchProps = ( dispatch: any ) => {
  
  return {
      onInitProjectPage: ( selectedProjectId: any ) => dispatch( actionCreators.initProjectPage(selectedProjectId) ),
      onProjectUpdatecDetails: ( selectedProjectId: any ) => dispatch( actionCreators.updateProjectDetails(selectedProjectId) ),
      onSetSelectedProject: ( selectedProjectId: any ) => dispatch( actionCreators.setSelectedProject(selectedProjectId) )
  }
}

export default connect( mapStoreToProps, matchDispatchProps )( ProjectPage );
