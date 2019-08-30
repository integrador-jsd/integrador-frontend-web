import React, { Component } from 'react';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider().setCustomParameters({ hd: 'udea.edu.co' }),
};

class Login extends Component {

    state = { users: [], appName: 'AulApp' };

    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                        <div className="content">
                            Administración - {this.state.appName}
                        </div>
                    </h2>
                    <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="email" placeholder="Usuario" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Contraseña" />
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button">
                                Login
                            </div>
                        </div>
                        <div className="ui error message"></div>
                    </form>
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        user
                            ? <button onClick={signOut}>Sign out</button>
                            : <button onClick={signInWithGoogle}>Sign in with Google</button>
                    }
                </div>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);