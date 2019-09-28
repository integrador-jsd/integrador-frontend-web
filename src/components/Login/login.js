import React, { Component } from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

import { connect } from 'react-redux';
import { signInGoogle, signOutGoogle } from '../../actions/userActions';
import PrivateModal from '../PrivateModal/privateModal';
import Loader from '../Loader/loader';

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
                <PrivateModal header="Espere un momento por favor">
                    <Loader />
                </PrivateModal>

                <div>
                    <h2 className="ui teal image header">
                        <div className="content">
                            Administración - {this.state.appName}
                        </div>
                    </h2>
                </div>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form">
                                <div className="field">
                                    <label>Usuario</label>
                                    <div className="ui left icon input">
                                        <input type="text" placeholder="Usuario" />
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Contraseña</label>
                                    <div className="ui left icon input">
                                        <input type="password" placeholder="Contraseña" />
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div className="ui blue submit button">Iniciar Sesión</div>
                            </div>
                        </div>
                        <div className="middle aligned column">
                            <div onClick={this.onSignInClick} className="ui big button">
                                <i className="google icon"></i>
                                <span>Correo Intitucional</span>
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider"> O </div>
                </div>
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