import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';
import { connect } from 'react-redux'
import { setDarkMode } from '../../config/commanActions'
 
class SearchBar extends Component {

    state = {
        searchBar: true
    }
    toggleSearchbar = () => {
        const { searchBar } = this.state
        this.setState({
            searchBar: !searchBar
        })
    }
    render() {
        const styleBackground = { background: "#F7F8FA" }
        const { status, darkMode } = this.props;
        const icon = status ? "align-left" : "align-justify"
        return (
            <div className="content-header" style={ styleBackground }>
                 <div className="content-search">
                    <FeatherIcon icon="search" className={this.state.searchBar && "search-icon"}></FeatherIcon>
                    <input type="search" className={this.state.searchBar ? "form-control search-input" : "form-control" } placeholder="Search" />
                </div>
                <nav className="nav">
                    <div className="nav-link search-toggler" onClick={ this.toggleSearchbar } ><FeatherIcon icon="search"></FeatherIcon></div>
                    <div className="nav-link" onClick={ this.props.setDarkMode }>
                        { darkMode ? <img src={"./assets/icons/sunny.svg"} width='18px' />
                            : <img src={"./assets/icons/moon.svg"} width='18px' /> }
                    </div>
                    <div className="nav-link"><FeatherIcon icon="grid"></FeatherIcon></div>
                    <div className="nav-link right-bar-toggle-btn" onClick={ this.props.toogleRightSideBar } >
                        <FeatherIcon icon={ icon }></FeatherIcon>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      darkMode: state.commonReducer.darkMode
    }
  }

export default connect( mapStateToProps, { setDarkMode })(SearchBar);