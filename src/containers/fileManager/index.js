import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentRoute } from '../../config/commanActions'
import Nav from './nav';
import Content from './content'
import $ from 'jquery';
import FileJquery from './filemanagerJquery'

class FileManager extends Component {

    componentDidMount = () => {
        // $(FileJquery)
        this.props.setCurrentRoute("cloud");
        // app-filemgr filemgr-sidebar-show
        document.body.classList.add('app-filemgr')
        document.body.classList.add('filemgr-sidebar-show')
    }

    // componentWillUnmount = () => {
    //     $('#mailSidebar').off('click');
    //     // $('.aside-menu-link').off('click');
    //     $(document).off('click touchstart');
    //     $('.important').off('click');
    //     $('.download').off('click');
    // }
    render() {
        return (
            <div className="content-body pd-0">
            <div className="filemgr-wrapper filemgr-wrapper-two">
                <Nav />
                <Content />
            </div>
            </div>
        );
    }
}

export default connect(null, { setCurrentRoute })(FileManager);