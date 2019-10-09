import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Grid, Header, Table, Select, Button, Icon, } from 'semantic-ui-react';
import './room.scss';

import { typeRoom, typeSectional } from '../../../util/methods';

import { getSections, getRoomsWithoutSection } from '../../../actions/sectionActions';

class Room extends Component {

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getSections(this.props.idToken, logisticUnit);
        this.props.getRoomsWithoutSection(this.props.idToken, logisticUnit);
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
                    rooms.map(({ id, sectionalID, blockID, roomID }) => {
                        return (
                            <Table.Row key={id}>
                                <Table.Cell>{typeSectional(sectionalID)}</Table.Cell>
                                <Table.Cell>{`${blockID}-${roomID}`}</Table.Cell>
                                <Table.Cell>{typeRoom(2)}</Table.Cell>
                                <Table.Cell>40</Table.Cell>
                                <Table.Cell>
                                    {
                                        type
                                            ? <Select placeholder='Sin Asignar' options={
                                                this.props.sections.map(({ id, name }) => {
                                                    return { key: id, value: name, text: name }
                                                })} />
                                            : <Button color='red' content='Eliminar' />
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
                        <Button
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
            <Grid centered columns={1} >
                <Grid.Row>
                    <Header as='h2' color='green'>Espacios</Header>
                </Grid.Row>
                <Grid.Row className="row">
                    <Accordion defaultActiveIndex={0} panels={this.rootPanelsRooms()}
                        exclusive={true} styled />
                    <Accordion defaultActiveIndex={[0]} panels={this.rootPanelsSections()}
                        exclusive={false} styled />
                </Grid.Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        idToken: state['user']['idToken'],
        email: state['user']['email'],
        sections: state['section']['list'],
        roomsWithoutSection: state['section']['roomsWithoutSection']
    }
}

export default connect(mapStateToProps, { getSections, getRoomsWithoutSection })(Room);