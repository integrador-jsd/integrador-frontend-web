import React, { Component } from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import { connect } from 'react-redux';
import { signInGoogle, signOutGoogle } from '../../actions/userActions';
import PrivateModal from '../PrivateModal/privateModal';
import Loader from '../Loader/loader';

import { Segment, Grid, Form, Button, Divider, Header } from 'semantic-ui-react';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider().setCustomParameters({ hd: 'udea.edu.co' }),
};

class Login extends Component {

    state = { appName: 'UdeAulas' };

    onSignInClick = () => {
        this.props.signInWithGoogle().then(authResponse => {
            this.onAuthChange(authResponse);
        });
    }

    onSignOutClick = () => {
        this.props.signOut().then(authResponse => {
            this.onAuthChange(authResponse);
        });
    }

    onAuthChange = (authResponse) => {
        if (authResponse) {
            const username = authResponse['additionalUserInfo']['profile']['name'];
            const idToken = authResponse['user']['ra'];
            this.props.signInGoogle(username, idToken);
        } else {
            this.props.signOutGoogle();
        }
    }

    render() {
        return (
            <div>
                <PrivateModal content={<Loader />} header="Espere un momento por favor" />

                <Header as='h2' color='green'>
                    <p className="header">Administración - {this.state.appName}</p>
                </Header>
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Usuario'
                                    placeholder='Usuario'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Contraseña'
                                    placeholder='Contraseña'
                                    type='password'
                                />
                                <Button content='Iniciar Sesión' primary />
                            </Form>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Button
                                onClick={this.onSignInClick}
                                content='Correo Intitucional'
                                icon='google'
                                size='big'
                            />
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Ó</Divider>
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isAuth: state['user']['isAuth'] }
}

export default connect(
    mapStateToProps,
    { signInGoogle, signOutGoogle })(withFirebaseAuth({
        providers,
        firebaseAppAuth,
    })(Login));