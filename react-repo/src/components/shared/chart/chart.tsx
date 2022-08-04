/*
 * chart.tsx.
 * 
 * @author Vishnu
 * @version 1.0.0
 */

import React, { Component } from 'react';
import ChartJS from 'chart.js';

import WrapClassToComponent from '../../../hoc/ApplyClass/ApplyClass';
import classes from './chart.module.css';


interface Props {
    title: string;
    chartId: string;
    xLabel: string;
    yLabel: string;
    labels: any[ ];
    dataChart: any[ ];
}

class Chart extends Component<Props> {

    myChart: ChartJS | null = null;
    chartRef: React.RefObject<HTMLCanvasElement>;

    constructor( props: any ) {

        super( props );
        this.chartRef = React.createRef<HTMLCanvasElement>( );
    }

    render( ) {
        return(
            <canvas id={ this.props.chartId } ref={ this.chartRef } />
        );
    }

    componentDidMount( ) {
        this.buildChart( );
    }

    componentDidUpdate( ) {
        this.buildChart( );
    }

    // Initialize the Chart
    buildChart = ( ) => {

        const myChartRef: any = this.chartRef.current?.getContext( "2d" );
        
        if ( typeof this.myChart !== "undefined" ) this.myChart?.destroy( );

        this.myChart = new ChartJS( myChartRef, {
            type: "line",
            data: {
                // attach data
                labels: this.props.labels,
                datasets: this.props.dataChart,
             },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                title: {
                    display: true,
                    text: this.props.title
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersect: true
                },
                scales: {
                    xAxes: [ {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.props.xLabel
                        }
                    }],
                    yAxes: [ {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: this.props.yLabel
                        }
                    } ]
                }
            }
        } );
    }
}

export default WrapClassToComponent( Chart, classes.graphConainer);
