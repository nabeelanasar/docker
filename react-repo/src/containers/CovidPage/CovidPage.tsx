/*
 * CovidPage.tsx
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { produce } from  'immer';

import Chart from '../../components/shared/chart/chart';
import * as actionCreators from '../../store/actions/index';
import { Message, Breadcrumb, Form2, Table3 } from '../../components/ui/index';
import Layout7 from '../../hoc/ApplyLayouts/Layout7';


interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    countries: any;
    dailySummary: any;
    news: any;
    data: any;
    error: any;
    noData: any;
    selectedCountryId: any;
    onSetSelectedCountry: any;
    onUpdatedCovidDetails: any;
    onInitCovidPage: any;
}

enum covidChartFetaures {

    chartLabelDeaths = 'Deaths',
    borderColorDeaths = '#DB2828',
    backgroundColorDeaths = '#DB2828',
    chartLabelRecoveries = 'Recoveries',
    borderColorRecoveries = '#21BA45', 
    backgroundColorRecoveries = '#21BA45',
    chartLabelConfirmed = 'Confirmed',
    borderColorConfirmed = '#FBBD08', 
    backgroundColorConfirmed = '#FBBD08'
}

class CovidPage extends Component<Props> {

    dropDownCountries: React.RefObject<HTMLSelectElement>;

    constructor( props: any ) {
        super( props );
        this.dropDownCountries = React.createRef<HTMLSelectElement>( );
    }

    DEFAULT_COUNTRY_ID = 1;

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
  
        const selectedCountryId = event.target.value;

        if ( selectedCountryId !== this.props.selectedCountryId ) {

          this.props.onSetSelectedCountry( selectedCountryId );
          this.props.history.push( `/covid/?covidCountryId=${selectedCountryId}&$limit=7&$sort[date]=1` );
        }
    }

    render( ) {
        
        // console.log( 'CovidPage rendering...'); 
        
        let countries: any = this.props.countries;
        let countriesJSX: any; 
        
        if ( countries ) {
            
            let options = countries.map( (option: any) => {
                return { value: option.id, displayValue: option.name }
            } );

            let updatedForm = produce( this.state.form, (formControl:any) => {
                formControl[ 'preference' ].elementConfig.options = options;
            } );

            countriesJSX = (
                <Form2
                    formConfig = { updatedForm }
                    onChange = { this.inputChangeHandler }
                    focusRef = { this.dropDownCountries }/>
            );
        }

        let dailySummary: any = this.props.dailySummary;

        let covidJSX: any; 

        if ( dailySummary ) {
            
            covidJSX = ( 
                <Table3
                    new_confirmed = { dailySummary.newConfirmed }
                    new_recovered = { dailySummary.newRecovered }
                    new_deaths = { dailySummary.newDeaths }
                    total_confirmed = { dailySummary.totalConfirmed }
                    total_recovered = { dailySummary.totalRecovered }
                    total_deaths = { dailySummary.totalDeaths }
                    date = { dailySummary.date.substring(0, 10) }/>
            );
        }

        let news: any = this.props.news;
        let newsJSX: any = '';
        
        newsJSX = ( 
            <Message
                variant = "danger"
                content = { news?  news.content: null }
                time = { news?  news.date: null }
                source = { news?'Times of India': null }
                title = { news?'Latest News': null }/>
        );
        
        let chartData: any = this.props.data;
        let chartJSX : any = '';
        
        if ( chartData ) {   

            chartJSX = this.getChartJSX( chartData.deaths, chartData.recovered, chartData.confirmed, chartData.date );
        }

        if ( this.props.error ) {
            covidJSX = (
                <Message
                    variant = "warning"
                    content = {`${ this.props.error.code } ${ this.props.error.message }`}
                />
            );
        }

        let breadCrumbJSX = (
           <Breadcrumb 
                items = { null }
                active = 'Covid'/>                  
        );

        return (
            <Fragment>
                <Layout7
                    breadCrumbJSX = { breadCrumbJSX }
                    dropDownJSX = { countriesJSX }
                    tableJSX = { covidJSX }
                    chartJSX = { chartJSX }
                    transitionJSX = { newsJSX }
                    noData = { this.props.noData }/>
            </Fragment>
        );
    }

    getChartJSX( death: string, recovered: string, confirmed: string, date: String ): any {

        let chartJSX: any = '';
        const dataChart: any[ ] = [ 
            { label: covidChartFetaures.chartLabelDeaths, data: death, fill: false, borderColor: covidChartFetaures.borderColorDeaths, backgroundColor: covidChartFetaures.backgroundColorDeaths, borderDash: [2,2] },
            { label: covidChartFetaures.chartLabelRecoveries, data: recovered, fill: true, borderColor: covidChartFetaures.borderColorRecoveries, backgroundColor: covidChartFetaures.backgroundColorRecoveries, borderDash: [ ] },
            { label: covidChartFetaures.chartLabelConfirmed, data: confirmed, fill: false, borderColor: covidChartFetaures.borderColorConfirmed, backgroundColor: covidChartFetaures.backgroundColorConfirmed, borderDash: [ ] }
        ];

        chartJSX = (
            <Chart 
                title = 'Covid Cases'
                chartId = 'CovidChart'
                xLabel = 'Date'
                yLabel = 'Cases'
                labels = { date }
                dataChart = { dataChart }/>
        );

        return chartJSX;
    }

    componentDidMount( ) {

        // console.log( 'CovidPage ComponentDidMount');

        //let selectedCountryId = ( this.props.match.params.id ) ? this.props.match.params.id : this.DEFAULT_COUNTRY_ID;
        let selectedCountryId = ( this.props.selectedCountryId ) ? this.props.selectedCountryId : this.DEFAULT_COUNTRY_ID;
        
        this.props.onInitCovidPage( selectedCountryId );
    }

    componentDidUpdate( ) {

        // console.log( 'CovidPage componentDidUpdate' );

        this.dropDownCountries.current?.focus( );

        if (  !this.props.dailySummary && !this.props.news && !this.props.data  && !this.props.error ) {

            this.props.onUpdatedCovidDetails( this.props.selectedCountryId );
            // this.props.onUpdatedCovidDetails( this.props.match.params.id );
        }
    }

    getCountryNameForCases( id: string ): string {
        
        let countries: any = this.props.countries;
        
        return ( countries?.find(
            ( item: any ) => id === item.id
        )?.name );
    }
}

const mapStoreToProps = ( state: any ) => {

    return {
        countries: state.covidPage.countries,
        dailySummary: state.covidPage.dailySummary,
        news: state.covidPage.news,
        data: state.covidPage.data,
        error: state.covidPage.error,
        noData: state.covidPage.noData,
        selectedCountryId: state.covidPage.selectedCountryId
    }
}

const matchDispatchProps = ( dispatch: any ) => {
    
    return {
        onInitCovidPage: ( selectedCountryId: any ) => dispatch( actionCreators.initCovidPage(selectedCountryId) ),
        onUpdatedCovidDetails: ( selectedCountryId: any ) => dispatch( actionCreators.updatedCovidDetails(selectedCountryId) ),
        onSetSelectedCountry: ( selectedCountryId: any ) => dispatch( actionCreators.setSelectedCountry(selectedCountryId) )
    }
}

export default connect( mapStoreToProps, matchDispatchProps )( CovidPage );
