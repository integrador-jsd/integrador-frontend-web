import React, { Component } from 'react';
import './SearcherUsersBar.scss';

class SearcherUsersBar extends Component {

    state = { user: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.user)
    }

    showUsers = () => {
        return this.props['users'][0] ?
            this.props['users'].map(({ id, name, email }) => {
                return <li key={id} tabIndex="-1">
                    <label>{name} ({email})</label>
                </li>
            }) : <li key="error" style={{ display: 'none' }}></li >;
    }

    lostFocus = () => {
        console.log(document.getElementById('ola'));
        if (document.getElementById('ola')) {
            document.getElementById('ola').style.display = 'none';
        }
    }

    getFocus = () => {
        console.log(document.getElementById('ola'));
        if (document.getElementById('ola')) {
            document.getElementById('ola').style.display = 'block';
        }
    }

    render() {
        return (
            <div onFocus={this.getFocus} onBlur={this.lostFocus} className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Busqueda de Estudiantes</label>
                        <input type="text" placeholder="Type" value={this.state.user} onChange={(e) => this.setState({ user: e.target.value })} />
                        <div className="searcher__users" id="searcher__options">
                            <ul id="ola">
                                {this.showUsers()}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearcherUsersBar;