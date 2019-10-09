import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon } from 'semantic-ui-react';

import { getPendingRequests } from '../../../actions/requestActions';
import { typeSectional } from '../../../util/methods';

class ShowRequest extends Component {

    state = { logisticUnit: '' };

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getPendingRequests(this.props.idToken, logisticUnit);
    }

    listPendingRequests = () => {
        return this.props.pendingRequests.map(({ id, sectionalID, blockID, roomID, createdBy }) => {
            return (
                <Table.Row key={id}>
                    <Table.Cell>{typeSectional(sectionalID)}</Table.Cell>
                    <Table.Cell>{`${blockID}-${roomID}`}</Table.Cell>
                    <Table.Cell>{createdBy}</Table.Cell>
                    <Table.Cell><Icon name='eye' style={{ cursor: 'pointer' }} /></Table.Cell>
                </Table.Row>
            );
        });
    }

    render() {
        return (
            <Table unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Seccional</Table.HeaderCell>
                        <Table.HeaderCell>Aula</Table.HeaderCell>
                        <Table.HeaderCell>Solicitante</Table.HeaderCell>
                        <Table.HeaderCell>Detalle</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.listPendingRequests()}
                </Table.Body>
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        pendingRequests: state['request']['pendingList']
    }
}

export default connect(mapStateToProps, { getPendingRequests })(ShowRequest);