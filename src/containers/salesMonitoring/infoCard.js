import React, { Component } from 'react'
import { df4 } from './sampledata'

class InfoCard extends Component{

    componentDidMount = () => {
      const { id } = this.props
        window.$.plot('#flotChartInfoCard'+id, [{
            data: df4,
            color: '#9db2c6'
          }], {
    			series: {
    				shadowSize: 0,
            lines: {
              show: true,
              lineWidth: 2,
              fill: true,
              fillColor: { colors: [ { opacity: 0 }, { opacity: .5 } ] }
            }
    			},
          grid: {
            borderWidth: 0,
            labelMargin: 0
          },
    			yaxis: {
            show: false,
            min: 0,
            max: 60
          },
    			xaxis: { show: false }
    		});
    }

    render(){
        const { title, value, change, increase ,id} = this.props
        let color = ""
        increase ? color = "tx-success" : color = "tx-danger"
        return(
        <div className="col-sm-6 col-lg-3">
              <div className="card card-body">
                <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">{title}</h6>
                <div className="d-flex d-lg-block d-xl-flex align-items-end">
                  <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{value}</h3>
                  <p className="tx-11 tx-color-03 mg-b-0"><span className={"tx-medium "+color}>{change}% <i className="icon ion-md-arrow-up"></i></span></p>
                </div>
                <div className="chart-three">
                    <div id={"flotChartInfoCard"+id} className="flot-chart ht-30"></div>
                  </div>
              </div>
            </div>
        )
    }
}

export default InfoCard