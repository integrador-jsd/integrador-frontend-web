import React, { Component } from 'react';

class List extends Component {

    state = { users: [] };

    listUsers = () => {
        return this.props.users.map(({id, name, email, image}) => {
            return (
                <div key={id} className="item">
                    <div className="right floated content">
                        <button className="ui button">Add</button>
                    </div>
                    <img alt="" className="ui avatar image" src={image} />
                    <div className="content">                        
                        <p className="header">{name}</p>
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

export default List;