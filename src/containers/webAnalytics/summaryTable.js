import React, { Component } from 'react'

const TableRow = (props) => {
    const { title, user, newUsers, sessions, bouncerate, pages, sessiontime, transactions, revenue, rate } = props.data
    return (
        <tr>
            <td><a href="">{title}</a></td>
            <td><strong>{user}</strong></td>
            <td><strong>{newUsers}</strong></td>
            <td><strong>{sessions}</strong></td>
            <td><strong>{bouncerate}%</strong></td>
            <td><strong>{pages}</strong></td>
            <td><strong>{sessiontime}</strong></td>
            <td><strong>{transactions}</strong></td>
            <td><strong>${revenue}</strong></td>
            <td><strong>{rate}%</strong></td>
        </tr>
    )
}

class Summary extends Component {

    state = {
        Summary : [
            {
                title : "Organic Search", 
                user : 350, 
                newUsers : 22, 
                sessions : 5694, 
                bouncerate : 25.60, 
                pages : 1.93, 
                sessiontime : "00:01:05", 
                transactions : "340192", 
                revenue : 1234, 
                rate : 4.50
            },
            {
                title : "Social Media", 
                user : 350, 
                newUsers : 22, 
                sessions : 5694, 
                bouncerate : 25.60, 
                pages : 1.93, 
                sessiontime : "00:01:05", 
                transactions : "340192", 
                revenue : 1234, 
                rate : 4.50
            }
        ]
    }

    render() {
        const { Summary } = this.state
        return (
            <div className="col mg-t-10">
                <div className="card card-dashboard-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th colspan="3">Acquisition</th>
                                    <th colspan="3">Behavior</th>
                                    <th colspan="3">Conversions</th>
                                </tr>
                                <tr>
                                    <th>Source</th>
                                    <th>Users</th>
                                    <th>New Users</th>
                                    <th>Sessions</th>
                                    <th>Bounce Rate</th>
                                    <th>Pages/Session</th>
                                    <th>Avg. Session</th>
                                    <th>Transactions</th>
                                    <th>Revenue</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Summary.map((item)=>(
                                        <TableRow data={item} />
                                    ))
                                }   
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summary