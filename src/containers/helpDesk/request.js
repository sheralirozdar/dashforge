import React, { Component } from 'react'
import $ from "jquery";
import Chart from 'chart.js'

class Request extends Component {

    componentDidMount = () => {

        const chartData = {
            labels: ['Modification', 'Code Request', 'Feature Request', 'Bug Fix', 'Integration', 'Production'],
            datasets: [{
                data: [90, 60, 50, 95, 50, 60],
                backgroundColor: ['#65e0e0', '#69b2f8', '#6fd39b', '#f77eb9', '#fdb16d', '#c693f9']
            }, {
                data: [60, 50, 70, 45, 70, 30],
                backgroundColor: '#e5e9f2'
            }]
        }

        $(function () {
            var ctx2 = document.getElementById('chartBar2').getContext('2d');
            new Chart(ctx2, {
                type: 'horizontalBar',
                data: chartData,
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    legend: {
                        display: false,
                        labels: {
                            display: false
                        }
                    },
                    layout: {
                        padding: {
                            left: 5
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false
                            },
                            barPercentage: 0.5,
                            ticks: {
                                beginAtZero: true,
                                fontSize: 13,
                                fontColor: '#182b49',
                                fontFamily: 'IBM Plex Sans'
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                color: '#e5e9f2'
                            },
                            ticks: {
                                beginAtZero: true,
                                fontSize: 10,
                                fontColor: '#182b49',
                                max: 100
                            }
                        }]
                    }
                }
            })
        })
    }

    render() {
        return (
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header pd-b-0 pd-t-20 bd-b-0">
                        <h6 className="mg-b-0">Tickets By Request Type</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-seventeen"><canvas id="chartBar2"></canvas></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Request