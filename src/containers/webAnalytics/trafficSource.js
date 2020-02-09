import React, { Component } from 'react'

class Traffic extends Component{

    render(){

        return(
            <div className="col-sm-5 col-md-4 col-lg-3 mg-t-10">
              <div className="card">
                <div className="card-header">
                  <h6 className="mg-b-0">Top Traffic Source</h6>
                </div>
                <div className="card-body tx-center">
                  <h4 className="tx-normal tx-rubik tx-40 tx-spacing--1 mg-b-0">{this.props.totalTraffic}</h4>
                  <p className="tx-12 tx-uppercase tx-semibold tx-spacing-1 tx-color-02">Organic Search</p>
                  <p className="tx-12 tx-color-03 mg-b-0">Measures your user's sources that generate traffic metrics to your website for this month.</p>
                </div>
                <div className="card-footer bd-t-0 pd-t-0">
                  <button className="btn btn-sm btn-block btn-outline-primary btn-uppercase tx-spacing-1">Learn More</button>
                </div>
              </div>
            </div>
        )
    }
}

export default Traffic