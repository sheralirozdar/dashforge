import React, { Component } from 'react'
import $ from 'jquery';

const TableRow = (props) => {
    const { city, orders, earnings } = props
    return (
        <tr>
            <td className="tx-medium">{city}</td>
            <td className="text-right">{orders}</td>
            <td className="text-right">${earnings}</td>
        </tr>
    )
}

class SaleRevenue extends Component {

    // componentDidMount = () => {
    //     $('#vmap').vectorMap({
    //         map: 'usa_en',
    //         showTooltip: true,
    //         backgroundColor: '#fff',
    //         color: '#d1e6fa',
    //         colors: {
    //             fl: '#69b2f8',
    //             ca: '#69b2f8',
    //             tx: '#69b2f8',
    //             wy: '#69b2f8',
    //             ny: '#69b2f8'
    //         },
    //         selectedColor: '#00cccc',
    //         enableZoom: false,
    //         borderWidth: 1,
    //         borderColor: '#fff',
    //         hoverOpacity: .85
    //     });
    // }

    render() {
        return (
            <div className="col-md-6 col-xl-4 mg-t-10 order-md-1 order-xl-0">
                <div className="card ht-lg-100p">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <h6 className="mg-b-0">Sales Revenue</h6>
                        <div className="tx-13 d-flex align-items-center">
                            <span className="mg-r-5">Country:</span> <a href="" className="d-flex align-items-center link-03 lh-0">USA <i className="icon ion-ios-arrow-down mg-l-5"></i></a>
                        </div>
                    </div>
                    <div className="card-body pd-0">
                        <div className="pd-y-25 pd-x-20">
                            <div id="vmap" className="ht-200"></div> 
                        </div>
                        <div className="table-responsive">
                            <table className="table table-borderless table-dashboard table-dashboard-one">
                                <thead>
                                    <tr>
                                        <th className="wd-40">States</th>
                                        <th className="wd-25 text-right">Orders</th>
                                        <th className="wd-35 text-right">Earnings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                    <TableRow city="New York" orders={11222} earnings={123545} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SaleRevenue