import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
const NavFooter = (props) => {

    const [ FooterNav ,setFooterNav ] = useState(true)

    let classes = FooterNav ? "tab-item js-tab-item js-tab-item-show" : "tab-item js-tab-item"
    // let icon = FooterNav ?  <i className="fas fa-times"></i> :  <i className="fas fa-plus"></i>
    let controllerClass = FooterNav ? "tab-item tab-item--middle js-tab-item js-tab-item-main-control-active" : "tab-item tab-item--middle js-tab-item js-tab-item-main-control";

        return (
            <React.Fragment>


                <div className="sidebar-footer" onMouseEnter={ () => props.asideHover(true)} onMouseLeave={() => props.asideHover(false)}>
                    <div className="tabs js-tabs js-tabs-init">

                        <div className="cover-back cover-back-tabs js-cover-back-tabs"></div>

                        <div className="tabs-container">
                            <div className={ props.currenttab == "apps" ?  classes + " active" : classes }  onClick={ () => props.changeTab("apps") }>
                                <i className="fas fa-inbox"></i>
                            </div>

                            <div className={ props.currenttab == "integartions" ?  classes + " active" : classes } onClick={ () => props.changeTab("integartions") }>
                            <i className="fas fa-chart-bar"></i>
                            </div>

                            <div className={controllerClass} onClick={ () => setFooterNav(!FooterNav) }>
                                <i className="fas fa-times"></i> 
                            </div>

                            <div className={ props.currenttab == "sequence" ?  classes + " active" : classes } onClick={ () => props.changeTab("sequence") }>
                                <i className="fas fa-address-book"></i>
                            </div>

                            <div className={ props.currenttab == "support" ?  classes + " active" : classes } onClick={ () => props.changeTab("support") }>
                                <i className="fas fa-info-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

            // <div className="sidebar-footer" >
            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("apps") }>
            //         <div className={ currenttab == "apps" ? "button-icon opened-tab" : "button-icon"}>
            //             <i className="fas fa-chart-bar"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("integartions") }>
            //         <div className={ currenttab == "integartions" ? "button-icon opened-tab" : "button-icon"}>
            //             <i className="fas fa-inbox"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("sequence") }>
            //         <div className={ currenttab == "sequence" ? "button-icon opened-tab" : "button-icon"}>
            //             <i className="fas fa-users"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            //     <div className="icon-wrapper" onClick={ () => this.props.changeTab("support") }>
            //         <div className={ currenttab == "support" ? "button-icon opened-tab" : "button-icon"}>
            //             <i className="fas fa-inbox"></i>
            //             {/* <span className="visuallyHidden__StyledWrapperSpan-sc-11zdheu-0 eWSXht">Inbox</span> */}
            //         </div>
            //     </div>

            // </div>
        )
}

export default NavFooter;