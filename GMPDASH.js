import React from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { URL } from './Config';

class GMPdash extends React.Component {
    state = {
        chartOptions: {
            chart: {type: 'bar', height: 400},
            credits: {enabled: false},
            title: {text: 'GMP'},
            xAxis: {categories: []},
            yAxis: {min: 0, title: {text: 'Total Messages'}},
            series: [
                {
                    name: 'Received',
                    data: []
                }, 
                {
                    name: 'In-Process',
                    data: []
                }, 
                {
                    name: 'Completed',
                    data: []
                }
            ],
            legend: {reversed: true},
            plotOptions: {
                series: {
                    stacking: 'normal',
                    colors: ["#7cb5ec", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1"]
                }
            }
        }
    };

    getData(){
        const link = URL + 'api/gmpd'
        axios
            .get(link)
            .then(response => {
                const xdata = [];
                const yrec = [];
                const yinp = [];
                const ycomp = [];
                response.data.filter(record => record.gmp_status !== '8').map(record => {
                    xdata.push(record.response_gmp_instance)
                    yrec.push(record.response_gmp_received)
                    yinp.push(record.response_gmp_inprocess)
                    ycomp.push(record.response_gmp_completed)
                });
                this.setState(prevState => ({
                    chartOptions: {
                        ...prevState.chartOptions,
                        xAxis: {
                            ...prevState.chartOptions.xAxis,
                            categories: xdata
                        },
                        series: [     
                            {...prevState.chartOptions.series[0], data: yrec},
                            {...prevState.chartOptions.series[1], data: yinp},
                            {...prevState.chartOptions.series[2], data: ycomp}
                        ]
                    }
                }));
            })
            .catch(() => {})
    };

    componentDidMount(){
        this.interval = setInterval(this.getData, this.props.auto);
        this.getData();
    }

    componentDidUpdate(){
        console.log(this.props.auto)
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){
        return(
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.chartOptions}
                />
            </div>
        )
    };
}

export default GMPdash;
