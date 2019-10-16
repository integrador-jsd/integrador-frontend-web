import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Accordion, Grid, Header, Table, Select, Button, Icon, } from 'semantic-ui-react';
import './room.scss';

import PrivateModal from '../../PrivateModal/privateModal';
import { typeRoom, typeSectional } from '../../../util/methods';
import { openModal, closeModal } from '../../../actions/modalActions';
import { getSections, getRoomsWithoutSection, assignSpace, removeSpace } from '../../../actions/sectionActions';

class Room extends Component {

    state = { logisticUnit: this.props.email.split('@')[0] }

    componentDidMount() {
        this.props.getSections(this.props.idToken, this.state.logisticUnit);
        this.props.getRoomsWithoutSection(this.props.idToken, this.state.logisticUnit);
    }

    deleteSpace = (roomId, sectionId) => {
        this.props.removeSpace(this.props.idToken, this.state.logisticUnit, sectionId, roomId);
        this.props.closeModal();
    }

    openModalToDelete = (id, sectionId) => {
        console.log('id: ', id, ' sectionId: ', sectionId);

        this.setState({
            content: <p>¿Está seguro que desea eliminar este espacio del sector?</p>,
            header: <Header>Alerta</Header>,
            actions: (
                <Fragment>
                    <Button color='red' onClick={() => this.props.closeModal()}>
                        <Icon name='delete' />  Cancelar
                        </Button>
                    <Button color='green' onClick={() => this.deleteSpace(id, sectionId)}>
                        <Icon name='checkmark' />  Confirmar
                        </Button>
                </Fragment>
            )
        });
        this.props.openModal({ size: 'mini', open: true });
    }

    checkChanges = (rooms) => {
        const assignedRooms = rooms.map((room, i) => {
            return document.getElementsByClassName('select')[i].outerText === 'Sin Asignar' ? false : { ...room, sectionIndex: i };
        }).filter(room => room !== false);

        if (assignedRooms.length > 0) {
            let completeRoomsData = [];
            Object.values(assignedRooms).forEach(assignedRoom => {
                const roomData = this.props.sections.map((section) => {
                    const selectText = document.getElementsByClassName('select')[assignedRoom.sectionIndex].outerText;
                    return section.name === selectText ? { ...assignedRoom, section: section } : false;
                }).filter(room => room !== false);
                completeRoomsData.push(roomData[0]);
            });

            this.setState({
                content: (
                    <Fragment>
                        <b>¿Está seguro que desea realizar la siguiente acción?</b>
                        {completeRoomsData.map(({ blockID, roomID, section }, i) => {
                            return <p key={i}>Asignar el espacio <b>{`${blockID}-${roomID}`}</b> al sector <b>{section.name}</b></p>
                        })}
                    </Fragment>
                ),
                header: <Header>Alerta</Header>,
                actions: (
                    <Fragment>
                        <Button color='red' onClick={() => this.props.closeModal()}>
                            <Icon name='delete' />  Cancelar
                            </Button>
                        <Button color='green' onClick={() => this.saveChanges(completeRoomsData)}>
                            <Icon name='checkmark' />  Confirmar
                            </Button>
                    </Fragment>
                )
            });
            this.props.openModal({ size: 'tiny', open: true });
        }
    }

    saveChanges = (completeRoomsData) => {
        completeRoomsData.forEach(({ sectionalID, blockID, roomID, section }) => {
            this.props.assignSpace(this.props.idToken, this.state.logisticUnit, section['id'], sectionalID, blockID, roomID);
        });
        this.props.closeModal();
    }

    TableData = (rooms, type) => (
        <Table unstackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Seccional</Table.HeaderCell>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Tipo</Table.HeaderCell>
                    <Table.HeaderCell>Capacidad</Table.HeaderCell>
                    <Table.HeaderCell>Acción</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    rooms.map(({ id, sectionID, sectionalID, blockID, roomID }) => {
                        return (
                            <Table.Row key={id}>
                                <Table.Cell>{typeSectional(sectionalID)}</Table.Cell>
                                <Table.Cell>{`${blockID}-${roomID}`}</Table.Cell>
                                <Table.Cell>{typeRoom(2)}</Table.Cell>
                                <Table.Cell>40</Table.Cell>
                                <Table.Cell>
                                    {
                                        type
                                            ? <Select className='select' placeholder='Sin Asignar' options={
                                                this.props.sections.map(({ id, name }) => {
                                                    return { key: id, value: name, text: name }
                                                })} />
                                            : <Button color='red' content='Eliminar' onClick={() => this.openModalToDelete(id, sectionID)} />
                                    }
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>

            <Table.Footer fullWidth style={{ display: type ? '' : 'none' }}>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button onClick={() => this.checkChanges(rooms)}
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                        >
                            <Icon name='save' />
                            Guardar Cambios
                         </Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );

    rootPanelsSections = () => {
        return this.props.sections.map(({ id, name, rooms_per_sections }) => {
            return {
                key: id,
                title: name,
                content: {
                    content: rooms_per_sections.length > 0
                        ? this.TableData(rooms_per_sections, false)
                        : <p>Aún no tienes espacios en este sector</p>
                }
            }
        });
    }

    rootPanelsRooms = () => [{
        key: 'roomsWithoutSection',
        title: 'Espacios sin asignar',
        content: {
            content: this.props.roomsWithoutSection.length > 0
                ? this.TableData(this.props.roomsWithoutSection, true)
                : <p>Todos tus espacios ya han sido asignados</p>
        }
    }]

    render() {
        return (
            <Fragment>
                <PrivateModal content={this.state.content} header={this.state.header}
                    actions={this.state.actions} />
                <Grid centered columns={1} >
                    <Grid.Row>
                        <Header as='h2' color='green'><p className="header">Espacios</p></Header>
                    </Grid.Row>
                    <Grid.Row className="row">
                        <Accordion defaultActiveIndex={0} panels={this.rootPanelsRooms()}
                            exclusive={true} styled />
                        <Accordion defaultActiveIndex={[this.props.selectedIndex]} panels={this.rootPanelsSections()}
                            exclusive={false} styled />
                    </Grid.Row>
                </Grid>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        sections: state['section']['list'],
        selectedIndex: state['section']['selectedIndex'],
        roomsWithoutSection: state['section']['roomsWithoutSection']
    }
}

export default connect(mapStateToProps, {
    getSections, getRoomsWithoutSection, assignSpace,
    removeSpace, openModal, closeModal
})(Room);