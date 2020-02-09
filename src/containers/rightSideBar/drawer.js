import React, { Component } from 'react'
import { connect } from "react-redux";
import GetStarted from './getStarted'
import Calendar from './calendaRightbar'
import Shortcuts from './shortcuts'
import Integration from './integration'
import Contacts from './contacts'

const DrawerContent = (props) => {
    switch (props.contentNumber) {
        case 1:
            return <GetStarted />
        case 2:
            return <Calendar />
        case 3:
            return <Contacts />
        case 4:
            return <Shortcuts />
        case 5:
            return <Integration />
    }
}

class Drawer extends Component{
    
    render(){
        const { contentNumber } = this.props; 
        const display = contentNumber ? 'block' : 'none'
        return(
            <div className="drawer" style={{ display: display }}>
                { contentNumber ? <DrawerContent contentNumber={ this.props.contentNumber }/> : <React.Fragment></React.Fragment> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      contentNumber: state.drawers.contentNumber
    }
}
  
export default connect(mapStateToProps, null )(Drawer);