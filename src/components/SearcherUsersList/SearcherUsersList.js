import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearcherUsersBar from './SearcherUsersBar';
import List from '../UsersList/List';
import { getAllUsers, changeType } from '../../actions/managementUserActions';

class SearcherUsersList extends Component {

    state = { users: this.props.users };

    onSearchSubmit = async (name) => {

    }

    updateUserType = (user, logisticUnit, newUserType) => {
        this.props.changeType(user, logisticUnit, newUserType, this.props.idToken);
    }

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getAllUsers(this.props.idToken, logisticUnit);
    }

    render() {
        return (
            <div className="ui secondary" >
                <SearcherUsersBar onSubmit={this.onSearchSubmit} users={[]} />
                <List updateUserType={this.updateUserType} users={this.props.users} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        users: state['users']['list']
    }
}

export default connect(mapStateToProps, { getAllUsers, changeType })(SearcherUsersList);