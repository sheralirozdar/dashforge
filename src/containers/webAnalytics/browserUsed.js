import React, { Component } from 'react'

const TableRow = (props) => {
    const { browser, sessions, bouncerate, conversionrate } = props
    return (
        <tr>
            <td><i className="fab fa-chrome tx-primary op-6"></i></td>
            <td className="tx-medium">{browser}</td>
            <td className="text-right">{sessions}</td>
            <td className="text-right">{bouncerate}</td>
            <td className="text-right">{conversionrate}</td>
        </tr>
    )
}
class BrowserUsed extends Component {

    render() {
        return (
            <table className="table table-borderless table-sm tx-13 tx-nowrap mg-b-0">
                <thead>
                    <tr className="tx-10 tx-spacing-1 tx-color-03 tx-uppercase">
                        <th className="wd-5p">&nbsp;</th>
                        <th>Browser</th>
                        <th className="text-right">Sessions</th>
                        <th className="text-right">Bounce Rate</th>
                        <th className="text-right">Conversion Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow browser="Chorme" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Mozilla FireFox" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Safari" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                    <TableRow browser="Edge" sessions="13400" bouncerate="40.12%" conversionrate="19.12%"/>
                </tbody>
            </table>
        )
    }
}

export default BrowserUsed