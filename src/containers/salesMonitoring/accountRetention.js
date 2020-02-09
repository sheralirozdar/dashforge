import React, { Component } from 'react'

const InfoCard = (props) => {
    const { title, Amount } = props
    let description, color =""

    title == "Expansions" ? description = "Customers who have upgraded the level of your products." :
    description = "Customers who have ended their subscription."

    title == "Expansions" ? color = "tx-primary" : color = "tx-danger"
    return (
        <div className="col-sm">
            <h4 className="tx-normal tx-rubik tx-spacing--1 mg-b-5">{Amount}</h4>
            <p className={"tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-10 "+color}>{title}</p>
            <div className="tx-12 tx-color-03">{description}</div>
        </div>
    )
}

class AccountRetention extends Component {

    componentDidMount = () => {
        window.$.plot('#flotChart2', [{
            data: [[0, 55], [1, 38], [2, 20], [3, 70], [4, 50], [5, 15], [6, 30], [7, 50], [8, 40], [9, 55], [10, 60], [11, 40], [12, 32], [13, 17], [14, 28], [15, 36], [16, 53], [17, 66], [18, 58], [19, 46]],
            color: '#69b2f8'
        }, {
            data: [[0, 80], [1, 80], [2, 80], [3, 80], [4, 80], [5, 80], [6, 80], [7, 80], [8, 80], [9, 80], [10, 80], [11, 80], [12, 80], [13, 80], [14, 80], [15, 80], [16, 80], [17, 80], [18, 80], [19, 80]],
            color: '#f0f1f5'
        }], {
            series: {
                stack: 0,
                bars: {
                    show: true,
                    lineWidth: 0,
                    barWidth: .5,
                    fill: 1
                }
            },
            grid: {
                borderWidth: 0,
                borderColor: '#edeff6'
            },
            yaxis: {
                show: false,
                max: 80
            },
            xaxis: {
                ticks: [[0, 'Jan'], [4, 'Feb'], [8, 'Mar'], [12, 'Apr'], [16, 'May'], [19, 'Jun']],
                color: '#fff',
            }
        });
    }

    render() {

        return (
            <div className="col-lg-4 col-xl-5 mg-t-10">
                <div className="card">
                    <div className="card-header pd-t-20 pd-b-0 bd-b-0">
                        <h6 className="mg-b-5">Account Retention</h6>
                        <p className="tx-12 tx-color-03 mg-b-0">Number of customers who have active subscription with you.</p>
                    </div>
                    <div className="card-body pd-20">
                        <div className="chart-two mg-b-20">
                            <div id="flotChart2" className="flot-chart"></div>
                        </div>
                        <div className="row">
                            <InfoCard title="Expansions" Amount={15453.23}  />
                            <InfoCard title="Cancellations" Amount={145233.23}  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountRetention