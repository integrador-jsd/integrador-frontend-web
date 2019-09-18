import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER, ASSISTANT, ADMINISTRATOR } from '../../util/constants';

class List extends Component {

    state = { users: [], logisticUnit: this.props.email.split('@')[0] };

    addAssistant = (username) => {
        this.props.updateUserType(username, this.state.logisticUnit, ASSISTANT);
    }

    deleteAssistant = (username) => {
        this.props.updateUserType(username, this.state.logisticUnit, USER);
    }

    listUsers = () => {
        return this.props.users.map(({ username, email, userType, logisticUnit }) => {
            return (
                <div key={username} className="item" style={{ display: userType === ADMINISTRATOR ? 'none' : 'block' }}>
                    <div className="right floated content">
                        {
                            userType === USER
                                ? <button className="ui button green" onClick={() => this.addAssistant(username)}>Agregar</button>
                                : userType === ASSISTANT && logisticUnit === this.state.logisticUnit
                                    ? <button className="ui button red" onClick={() => this.deleteAssistant(username)}>Eliminar</button>
                                    : <button className="ui button gray">Inválido</button>
                        }
                    </div>
                    {/* <img alt="" className="ui avatar image" src={} /> */}
                    <div className="content">
                        <p className="header">{username}</p>
                        <div className="description">{email}</div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui middle aligned divided list">
                {this.listUsers()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { email: state['user']['email'] }
}

export default connect(mapStateToProps)(List);