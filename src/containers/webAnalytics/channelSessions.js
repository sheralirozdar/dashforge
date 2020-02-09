import React, { Component } from 'react'
import $ from 'jquery';
import Chart from 'chart.js'

const SessionInfo = (props) => {
    const { ChannelName, Sessions, Percentage } = props.data
    let classes = ""
    props.itemNumber < 2  ? classes = "col-6" : classes = "col-6 mg-t-20"
    return (
        <div className={ classes}>
            <p className="tx-10 tx-uppercase tx-medium tx-color-03 tx-spacing-1 mg-b-5">{ChannelName}</p>
            <div className="d-flex align-items-center">
                <div className="wd-10 ht-10 rounded-circle bg-teal mg-r-5"></div>
                <h6 className="tx-normal tx-rubik mg-b-0">{Sessions} <small className="tx-color-04">{Percentage}</small></h6>
            </div>
        </div>
    )
}
class Sessions extends Component {
    state = {
        Sessions : [
            {
                ChannelName : "Referrral",
                Sessions : 1320,
                Percentage : "30%"
            },
            {
                ChannelName : "Email",
                Sessions : 1320,
                Percentage : "30%"
            },
            {
                ChannelName : "Socail",
                Sessions : 1320,
                Percentage : "30%"
            },
            {
                ChannelName : "Search",
                Sessions : 1320,
                Percentage : "30%"
            }
        ]
    }

    componentDidMount(){
        $(function(){
            var datapie = {
                labels: ['Organic Search', 'Email', 'Referral', 'Social Media'],
                datasets: [{
                  data: [20,20,30,25],
                  backgroundColor: ['#f77eb9', '#7ebcff','#7ee5e5','#fdbd88']
                }]
              };
          
              var optionpie = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  display: false,
                },
                animation: {
                  animateScale: true,
                  animateRotate: true
                }
              };
          
              // For a pie chart
              var ctx2 = document.getElementById('chartDonut');
              var myDonutChart = new Chart(ctx2, {
                type: 'doughnut',
                data: datapie,
                options: optionpie
              });
        });
    }

    render() {
        const { Sessions } = this.state
        return (
            <div className="col-md-6 col-lg-4 col-xl-3 mg-t-10 mg-lg-t-0">
                <div className="card">
                    <div className="card-header">
                        <h6 className="mg-b-0">Sessions By Channel</h6>
                    </div>
                    <div className="card-body pd-lg-25">
                        <div className="chart-seven">
                            <canvas id="chartDonut"></canvas>
                        </div>
                    </div>
                    <div className="card-footer pd-20">
                        <div className="row">
                            {
                                Sessions.map( (item, key) => (
                                 <SessionInfo itemNumber={key} data={item}/>
                                ))
                            }   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sessions;