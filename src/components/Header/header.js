import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    state = { appName: 'AulApp' };

    render() {
        return (
            <div className="ui secondary pointing menu">
                <div className="left menu">
                    <Link to="/" className="item">{this.state.appName}</Link>
                </div>
                <div className="right menu">
                    <Link to="/" className="item">Login</Link>
                </div>
            </div>
        );
    }
}

export default Header;