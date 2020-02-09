import React, { Component } from 'react'

class AdsAnalytics extends Component {

    state = {
        flotChart : {
            series: {
              shadowSize: 0,
              bars: {
                show: true,
                lineWidth: 0,
                barWidth: .5,
                fill: 1
              }
            },
            grid: {
              aboveData: true,
              color: '#e5e9f2',
              borderWidth: 0,
              labelMargin: 0
            },
                  yaxis: {
              show: false,
              min: 0,
              max: 25
            },
                  xaxis: {
              show: false
            }
        },
        color : null
    }

    componentDidMount = () => {
        const { id } = this.props
        const { flotChart } = this.state

        const df3data1 = [[0,12],[1,10],[2,7],[3,11],[4,15],[5,20],[6,22],[7,19],[8,18],[9,20],[10,17],[11,19],[12,18],[13,14],[14,9]];
        const df3data2 = [[0,0],[1,0],[2,0],[3,2],[4,5],[5,2],[6,12],[7,15],[8,10],[9,8],[10,10],[11,7],[12,2],[13,4],[14,0]];
        window.$.plot('#flotChartAds'+id, [{
            data: df3data1,
            color:  '#e5e9f2'
        }, {
            data: df3data2,
            color: '#66a4fb'
        }], flotChart);
    }

    render() {
        const { title, number, id } = this.props
        let description, color = ""

        title == "Click Through" ? description = "No. of clicks to ad that consist of a single impression." : title == "View Through" ?
            description = "Estimated daily unique views per visitor on the ads." :
            description = "Estimated total conversions on ads per impressions to ads."

        title == "Click Through" ? color = "tx-primary" : title == "View Through" ?
            color = "tx-teal" : color = "tx-pink"

        return (
            <div className="col-lg-4 col-md-6 mg-t-10">
                <div className="card">
                    <div className="card-body pd-y-20 pd-x-25">
                        <div className="row row-sm">
                            <div className="col-7">
                                <h3 className="tx-normal tx-rubik tx-spacing--1 mg-b-5">{number}</h3>
                                <h6 className={"tx-12 tx-semibold tx-uppercase tx-spacing-1 " + color + " mg-b-5"}>{title}</h6>
                                <p className="tx-11 tx-color-03 mg-b-0">{description}</p>
                            </div>
                            <div className="col-5">
                                <div className="chart-ten">
                                    <div id={"flotChartAds"+id} className="flot-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdsAnalytics