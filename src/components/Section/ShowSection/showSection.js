import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getSections, saveSelectedIndex } from '../../../actions/sectionActions';

class ShowSection extends Component {

    state = { logisticUnit: '' };

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getSections(this.props.idToken, logisticUnit);
    }

    listSections = () => {
        return this.props.sections.map(({ id, name }, i) => {
            return (
                <tr key={id}>
                    <td data-label="id">{id}</td>
                    <td data-label="sectionName"><Link to={'/sections/rooms'} onClick={() => this.props.saveSelectedIndex(i)}>{name}</Link></td>
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

export default connect(mapStateToProps, { getSections, saveSelectedIndex })(ShowSection);