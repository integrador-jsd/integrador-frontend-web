import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSections } from '../../../actions/sectionActions';

class ShowSection extends Component {

    state = { logisticUnit: '', first: true };

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getSections(this.props.idToken, logisticUnit);
    }

    first = () => {
        this.setState({ first: !this.state.first });
    }

    listSections = () => {
        return this.props.sections.map(({ id, name }) => {
            return (
                <tr key={id}>
                    <td data-label="id">{id}</td>
                    <td data-label="sectionName">{name}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                    </tr></thead>
                <tbody>
                    {this.listSections()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        sections: state['section']['list']
    }
}

export default connect(mapStateToProps, { getSections })(ShowSection);