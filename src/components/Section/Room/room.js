import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Grid, Header, Table, Select, Button, Icon } from 'semantic-ui-react';
import './room.scss';

import { typeRoom, typeSectional } from '../../../util/methods';

import { getSections } from '../../../actions/sectionActions';

class Room extends Component {

    componentDidMount() {
        const logisticUnit = this.props.email.split('@')[0];
        this.props.getSections(this.props.idToken, logisticUnit);
    }

    TableData = (roomsPerSection, type) => (
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
                    roomsPerSection.map(({ id, sectionalID, blockID, roomID }) => {
                        return (
                            <Table.Row key={id}>
                                <Table.Cell>{typeSectional(sectionalID)}</Table.Cell>
                                <Table.Cell>{`${blockID}-${roomID}`}</Table.Cell>
                                <Table.Cell>{typeRoom(2)}</Table.Cell>
                                <Table.Cell>40</Table.Cell>
                                <Table.Cell>
                                    {
                                        !type
                                            ? <Select placeholder='Sin Asignar' options={
                                                [
                                                    { key: 'af', value: 'af', text: 'Afghanistan' },
                                                    { key: 'ax', value: 'ax', text: 'Aland Islands' },
                                                    { key: 'al', value: 'al', text: 'Albania' }
                                                ]
                                            } />
                                            : <Button color='red' content='Eliminar' />
                                    }
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>

            <Table.Footer fullWidth style={{ display: !type ? '' : 'none' }}>
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

    rootPanels = () => {
        return this.props.sections.map(({ id, name, rooms_per_sections }) => {
            return {
                key: id,
                title: name,
                content: {
                    content: rooms_per_sections.length > 0
                        ? this.TableData(rooms_per_sections, true)
                        : <div>Acá no hay nadita</div>
                }
            }
        });
    }

    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Row>
                    <Header as='h2' color='green'>Espacios</Header>
                </Grid.Row>
                <Grid.Row className="row">
                    <Accordion defaultActiveIndex={0} panels={this.rootPanels()}
                        exclusive={true} styled />
                    <Accordion defaultActiveIndex={[0]} panels={this.rootPanels()}
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
        sections: state['section']['list']
    }
}

export default connect(mapStateToProps, { getSections })(Room);