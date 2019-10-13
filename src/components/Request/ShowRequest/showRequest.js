import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Button, Grid } from 'semantic-ui-react';

import { getPendingRequests } from '../../../actions/requestActions';
import { typeSectional } from '../../../util/methods';
import PrivateModal from '../../PrivateModal/privateModal';
import { openModal, closeModal } from '../../../actions/modalActions';

class ShowRequest extends Component {

    state = { logisticUnit: '', selectedRequest: {} };

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getPendingRequests(this.props.idToken, logisticUnit);
    }

    openRequestDetails = (request) => {
        this.setState({ selectedRequest: request });
        this.props.openModal({ size: 'small', open: true });
    }

    getRequestContent = () => {
        const request = this.state.selectedRequest;
        return (
            <Table>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell><b> Solicitante: </b></Table.Cell>
                        <Table.Cell>{request.createdBy}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b> Seccional: </b></Table.Cell>
                        <Table.Cell>{request.sectionalID}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b> Hora inicial: </b></Table.Cell>
                        <Table.Cell>{request.startTime}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b> Hora final: </b></Table.Cell>
                        <Table.Cell>{request.endTime}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b> Aula: </b></Table.Cell>
                        <Table.Cell>{`${request.blockID}-${request.roomID}`}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell><b> Descripción: </b></Table.Cell>
                        <Table.Cell>{request.description}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }

    getRequestActions = () => {
        return (
            <Grid centered columns={2} >
                <Grid.Row>
                    <Grid.Column>
                        <Button color='grey' onClick={() => this.props.closeModal()}>
                            <Icon name='arrow left' /> Atras
                    </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button color='red' onClick={() => this.props.closeModal()}>
                            <Icon name='delete' />  Rechazar
                        </Button>
                        <Button color='green' onClick={() => this.props.closeModal()}>
                            <Icon name='checkmark' />  Confirmar
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        );
    }

    listPendingRequests = () => {
        return this.props.pendingRequests.map((request) => {
            return (
                <Table.Row key={request.id}>
                    <Table.Cell>{typeSectional(request.sectionalID)}</Table.Cell>
                    <Table.Cell>{`${request.blockID}-${request.roomID}`}</Table.Cell>
                    <Table.Cell>{request.createdBy}</Table.Cell>
                    <Table.Cell><Icon name='eye' style={{ cursor: 'pointer' }} onClick={() => this.openRequestDetails(request)} /></Table.Cell>
                </Table.Row>
            );
        });
    }

    render() {
        return (
            <Fragment>
                <PrivateModal content={this.getRequestContent()} header="Detalles de la solicitud"
                    actions={this.getRequestActions()} />
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
            </Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        pendingRequests: state['request']['pendingList']
    }
}

export default connect(mapStateToProps, { getPendingRequests, openModal, closeModal })(ShowRequest);