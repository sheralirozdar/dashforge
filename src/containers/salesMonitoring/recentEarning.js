import React, { Component } from 'react'
import FeatherIcon from 'feather-icons-react';

const DownlaodCSV = () => {

    return <div className="card card-body ht-lg-100">
        <div className="media">
            <span className="tx-color-04"><FeatherIcon icon="download" className="wd-60 ht-60"></FeatherIcon></span>
            <div className="media-body mg-l-20">
                <h6 className="mg-b-10">Download your earnings in CSV format.</h6>
                <p className="tx-color-03 mg-b-0">Open it in a spreadsheet and perform your own calculations, graphing etc.</p>
            </div>
        </div>
    </div>
}

const TableRow = (props) => {
    const { date, saleCount, grossEarning, taxWithHeld, netEarning, change } = props
    let color, arrow = ""
    change < 0 ? color = "tx-danger" : color = "tx-success"
    change < 0 ? arrow = "down" : arrow = "up"
    return (
        <tr>
            <td className="tx-color-03 tx-normal">{date}</td>
            <td className="tx-medium text-right">{saleCount}</td>
            <td className="text-right tx-teal">+ ${grossEarning}</td>
            <td className="text-right tx-pink">- ${taxWithHeld}</td>
            <td className="tx-medium text-right">${netEarning} <span className={"mg-l-5 tx-10 tx-normal " + color}><i className={"icon ion-md-arrow-" + arrow}></i> {change}%</span></td>
        </tr>
    )
}

const EarningInfo = (props) => {
    const { title, earnings , index } = props
    let classes = ""
    index === 0 ? classes = "media" : classes = "media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40"
    return (
        <div className={classes}>
            <div className="wd-40 wd-md-50 ht-40 ht-md-50 bg-teal tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6">
                <FeatherIcon icon="bar-chart-2"></FeatherIcon>
            </div>
            <div className="media-body">
                <h6 className="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8">{title}</h6>
                <h4 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">${earnings}</h4>
            </div>
        </div>
    )
}

class RecentEarning extends Component {

    render() {
        return (
            <div className="col-lg-12 col-xl-8 mg-t-10">
                <div className="card mg-b-10">
                    <div className="card-header pd-t-20 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0">
                        <div>
                            <h6 className="mg-b-5">Your Most Recent Earnings</h6>
                            <p className="tx-13 tx-color-03 mg-b-0">Your sales and referral earnings over the last 30 days</p>
                        </div>
                        <div className="d-flex mg-t-20 mg-sm-t-0">
                            <div className="btn-group flex-fill">
                                <button className="btn btn-white btn-xs active">Range</button>
                                <button className="btn btn-white btn-xs">Period</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body pd-y-30">
                        <div className="d-sm-flex">
                            <EarningInfo title="Gross Earnings" earnings={12231434} index={0}/>
                            <EarningInfo title="Tax Withdraw" earnings={12231434} index={1}/>
                            <EarningInfo title="Net Earnings" earnings={12231434} index={2}/>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-dashboard mg-b-0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th className="text-right">Sales Count</th>
                                    <th className="text-right">Gross Earnings</th>
                                    <th className="text-right">Tax Withheld</th>
                                    <th className="text-right">Net Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow date="02/05/2018" change={4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={-4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                                <TableRow date="02/05/2018" change={-4.5} saleCount={1234} grossEarning={12343} taxWithHeld={43243} netEarning={4543534} />
                            </tbody>
                        </table>
                    </div>
                </div>

                <DownlaodCSV />
            </div>
        )
    }
}

export default RecentEarning