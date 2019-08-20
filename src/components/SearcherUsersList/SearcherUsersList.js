import React, { Component } from 'react';
import { getUser } from '../../services/aux';
import SearcherUsersBar from './SearcherUsersBar';
import List from '../List';

class SearcherUsersList extends Component {

    state = { users: [] };

    onSearchSubmit = async (name) => {
        const response = await getUser(name);
        this.setState({ users: response['data'] });
    }

    render() {
        return (
            <div className="ui container" >
                <SearcherUsersBar onSubmit={this.onSearchSubmit} users={this.state['users']} />
                <List users={this.state['users']} />
            </div>
        );
    }
}

export default SearcherUsersList;