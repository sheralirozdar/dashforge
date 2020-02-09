import React, { Component } from 'react'

class Visits extends Component {

    render() {
        const { title } = this.props
        return (
            <div className="col-lg-6 mg-t-10">
                <div className="card">
                    <div className="card-header d-flex align-items-start justify-content-between">
                        <h6 className="lh-5 mg-b-0">{title}</h6>
                        <a href="" className="tx-13 link-03">Mar 01 - Mar 20, 2019 <i className="icon ion-ios-arrow-down"></i></a>
                    </div>
                    <div className="card-body pd-y-15 pd-x-10">
                        <div className="table-responsive">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Visits