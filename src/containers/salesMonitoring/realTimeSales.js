import React, { Component } from 'react'
import Chart from 'chart.js'

class RealTimeSale extends Component {

    componentDidMount = () => {
        const ctx1 = document.getElementById('chartBar1').getContext('2d');
        var ctxLabel = ['6am', '10am', '1pm', '4pm', '7pm', '10pm'];
        var ctxData1 = [20, 60, 50, 45, 50, 60];
        var ctxData2 = [10, 40, 30, 40, 55, 25];
        new Chart(ctx1, {
          type: 'horizontalBar',
          data: {
            labels: ctxLabel,
            datasets: [{
              data: ctxData1,
              backgroundColor: '#69b2f8'
            }, {
              data: ctxData2,
              backgroundColor: '#d1e6fa'
            }]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              display: false,
              labels: {
                display: false
              }
            },
            scales: {
              yAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  display: false,
                  beginAtZero: true,
                  fontSize: 10,
                  fontColor: '#182b49'
                }
              }],
              xAxes: [{
                gridLines: {
                  display: true,
                  color: '#eceef4'
                },
                barPercentage: 0.6,
                ticks: {
                  beginAtZero: true,
                  fontSize: 10,
                  fontColor: '#8392a5',
                  max: 80
                }
              }]
            }
          }
        });
    }

    render() {
        return (
            <div className="col-md-6 col-xl-4 mg-t-10">
                <div className="card ht-lg-100p">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">Real-Time Sales</h6>
                        <ul className="list-inline d-flex mg-b-0">
                            <li className="list-inline-item d-flex align-items-center">
                                <span className="d-block wd-10 ht-10 bg-df-2 rounded mg-r-5"></span>
                                <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Today</span>
                            </li>
                            <li className="list-inline-item d-flex align-items-center mg-l-10">
                                <span className="d-block wd-10 ht-10 bg-df-3 rounded mg-r-5"></span>
                                <span className="tx-sans tx-uppercase tx-10 tx-medium tx-color-03">Yesterday</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body pd-b-0">
                        <div className="row mg-b-20">
                            <div className="col">
                                <h5 className="tx-normal tx-rubik tx-spacing--1 mg-b-10">$150,200 <small className="tx-11 tx-success letter-spacing--2"><i className="icon ion-md-arrow-up"></i> 0.20%</small></h5>
                                <p className="tx-10 tx-uppercase tx-spacing-1 tx-medium tx-color-03">Total Sales</p>
                            </div>
                            <div className="col">
                                <h5 className="tx-normal tx-rubik tx-spacing--1 mg-b-10">$21,880 <small className="tx-11 tx-danger letter-spacing--2"><i className="icon ion-md-arrow-down"></i> 1.04%</small></h5>
                                <p className="tx-10 tx-uppercase tx-spacing-1 tx-medium tx-color-03">Avg. Sales Per Day</p>
                            </div>
                        </div>
                        <div className="chart-five">
                            <div><canvas id="chartBar1"></canvas></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RealTimeSale