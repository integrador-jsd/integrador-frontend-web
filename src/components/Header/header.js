import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOutGoogle } from '../../actions/userActions';

class Header extends Component {

    state = { appName: 'UdeAulas' };

    render() {
        return (
            <div className="ui secondary pointing menu">
                <div className="left menu">
                    {
                        this.props.isAuth
                            ? <Link to="/home" className="item"><b><p className="header">{this.state.appName}</p></b></Link>
                            : <Link to="/" className="item"><b><p className="header">{this.state.appName}</p></b></Link>
                    }
                </div>
                <div className="right menu">
                    {
                        this.props.isAuth
                            ? <Link to="/" onClick={this.props.signOutGoogle} className="item"><b><p className="header">Cerrar Sesión</p></b></Link>
                            : <Link to="/" className="item"><b><p className="header">Iniciar Sesión</p></b></Link>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isAuth: state['user']['isAuth'] }
}

export default connect(mapStateToProps, { signOutGoogle })(Header);