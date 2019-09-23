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
                    <Link to="/" className="item">{this.state.appName}</Link>
                </div>
                <div className="right menu">
                    {
                        this.props.isAuth
                            ? <Link to="/" onClick={this.props.signOutGoogle} className="item">Cerrar Sesión</Link>
                            : <Link to="/" className="item">Iniciar Sesión</Link>
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