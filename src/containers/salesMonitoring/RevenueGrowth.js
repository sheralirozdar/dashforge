import React, { Component } from 'react'
import { df1, df2, df3 } from './sampledata'
import $ from 'jquery'

class RevenueGrowth extends Component {

    componentDidMount = () => {
        $(function(){
            window.$.plot('#flotChart123', [{
                data: df3,
                color: '#69b2f8'
            }, {
                data: df1,
                color: '#d1e6fa'
            }, {
                data: df2,
                color: '#d1e6fa',
                lines: {
                    fill: false,
                    lineWidth: 1.5
                }
            }], {
                series: {
                    stack: 0,
                    shadowSize: 0,
                    lines: {
                        show: true,
                        lineWidth: 0,
                        fill: 1
                    }
                },
                grid: {
                    borderWidth: 0,
                    aboveData: true
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 350
                },
                xaxis: {
                    show: true,
                    ticks: [[0, ''], [8, 'Jan'], [20, 'Feb'], [32, 'Mar'], [44, 'Apr'], [56, 'May'], [68, 'Jun'], [80, 'Jul'], [92, 'Aug'], [104, 'Sep'], [116, 'Oct'], [128, 'Nov'], [140, 'Dec']],
                    color: 'rgba(255,255,255,.2)'
                }
            })
        })
    }

    render() {
        return (
            <div className="col-lg-8 col-xl-7 mg-t-10">
                <div className="card">
                    <div className="card-header pd-y-20 d-md-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">Recurring Revenue Growth</h6>
                        <ul className="list-inline d-flex mg-t-20 mg-sm-t-10 mg-md-t-0 mg-b-0">
                            <li className="list-inline-item d-flex align-items-center">
                                <span className="d-block wd-10 ht-10 bg-df-1 rounded mg-r-5"></span>
                                <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Growth Actual</span>
                            </li>
                            <li className="list-inline-item d-flex align-items-center mg-l-5">
                                <span className="d-block wd-10 ht-10 bg-df-2 rounded mg-r-5"></span>
                                <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Actual</span>
                            </li>
                            <li className="list-inline-item d-flex align-items-center mg-l-5">
                                <span className="d-block wd-10 ht-10 bg-df-3 rounded mg-r-5"></span>
                                <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Plan</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body pos-relative pd-0">
                        <div className="pos-absolute t-20 l-20 wd-xl-100p z-index-10">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h3 className="tx-normal tx-rubik tx-spacing--2 mg-b-5">$620,076</h3>
                                    <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">MRR Growth</h6>
                                    <p className="mg-b-0 tx-12 tx-color-03">Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="">Learn More</a></p>
                                </div>
                                <div className="col-sm-5 mg-t-20 mg-sm-t-0">
                                    <h3 className="tx-normal tx-rubik tx-spacing--2 mg-b-5">$1,200</h3>
                                    <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-10">Avg. MRR/Customer</h6>
                                    <p className="mg-b-0 tx-12 tx-color-03">The revenue generated per account on a monthly or yearly basis. <a href="">Learn More</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="chart-one">
                            <div id="flotChart123" className="flot-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RevenueGrowth