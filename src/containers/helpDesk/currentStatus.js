import React, { Component } from 'react'

const Information = (props) => {
    const { title, numberOfticket, change, increase } = props
    let classes = ""
    let icon = "" 
    increase ? classes = "tx-medium tx-success" : classes = "tx-medium tx-danger"
    increase ? icon = "icon ion-md-arrow-up" : icon = "icon ion-md-arrow-down"
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg" >
            <h4 className="tx-normal tx-rubik mg-b-10">{ numberOfticket }</h4>
            <div className="progress ht-2 mg-b-10">
                <div className="progress-bar wd-100p bg-df-2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 tx-color-02 mg-b-2">{ title }</h6>
            <p className="tx-10 tx-color-03 mg-b-0"><span className={classes}>{change}% <i className={icon}></i></span> than yesterday</p>
        </div >
    )
}

class CurrentStatus extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header d-sm-flex justify-content-between bd-b-0 pd-t-20 pd-b-0">
                    <div className="mg-b-10 mg-sm-b-0">
                        <h6 className="mg-b-5">Current Ticket Status</h6>
                        <p className="tx-12 tx-color-03 mg-b-0">as of 10th to 17th of March 2019</p>
                    </div>
                    <ul className="list-inline tx-uppercase tx-10 tx-medium tx-spacing-1 tx-color-03 mg-b-0">
                        <li className="list-inline-item">
                            <span className="d-inline-block wd-7 ht-7 bg-gray-400 rounded-circle mg-r-5"></span>
                            New<span className="d-none d-md-inline"> Tickets</span>
                        </li>
                        <li className="list-inline-item mg-l-10">
                            <span className="d-inline-block wd-7 ht-7 bg-df-2 rounded-circle mg-r-5"></span>
                            Solved<span className="d-none d-md-inline"> Tickets</span>
                        </li>
                        <li className="list-inline-item mg-l-10">
                            <span className="d-inline-block wd-7 ht-7 bg-primary rounded-circle mg-r-5"></span>
                            Open<span className="d-none d-md-inline"> Tickets</span>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="chart-fifteen">
                        <div id="flotChart1" className="flot-chart"></div>
                    </div>
                </div>
                <div className="card-footer pd-y-15 pd-x-20">
                    <div className="row row-sm">
                        <Information title="New Tickets" numberOfticket={156} change={1.2} increase={true} />
                        <Information title="Solved Tickets" numberOfticket={56} change={-1.2} increase={false} />
                        <Information title="Unresolved" numberOfticket={16} change={1.2} increase={true} />
                        <Information title="New Tickets" numberOfticket={15} change={1.2} increase={true} />
                        <Information title="New Tickets" numberOfticket={106} change={1.2} increase={true} />
                        <Information title="New Tickets" numberOfticket={106} change={1.2} increase={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentStatus 